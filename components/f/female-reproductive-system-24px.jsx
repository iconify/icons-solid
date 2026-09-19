import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oeeo29i8m.css';
import '../../css/c/c47g_htja.css';
import '../../css/z/zoj52acor.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="oeeo29i8m"/><path class="c47g_htja"/><path class="zoj52acor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:female-reproductive-system-24px"} {...others} />);
}

export default Component;
