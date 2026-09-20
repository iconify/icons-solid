import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kk0vstd2z.css';
import '../../css/y/y4cbihb5a.css';
import '../../css/y/yyuurebsp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kk0vstd2z"/><path class="y4cbihb5a"/><path clip-rule="evenodd" class="yyuurebsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-cross-outline"} {...others} />);
}

export default Component;
