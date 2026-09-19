import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iton6ra2f.css';
import '../../css/t/tgl287xkf.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="cuyn6tgcc"><path class="iton6ra2f"/><path class="tgl287xkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:no-smoking"} {...others} />);
}

export default Component;
