import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ya_55rppu.css';
import '../../css/b/b8ix9hiaq.css';
import '../../css/a/aw1zvwb5g.css';
import '../../css/n/n3cjoe8np.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ya_55rppu"/><path class="b8ix9hiaq"/><path class="aw1zvwb5g"/><path class="n3cjoe8np"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-terminal-bold-duotone"} {...others} />);
}

export default Component;
