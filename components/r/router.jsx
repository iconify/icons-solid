import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vv6_lghob.css';
import '../../css/z/zqgfkv9mp.css';
import '../../css/g/g5_dv9bao.css';
import '../../css/p/pfpm8ezql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="vv6_lghob wm-shadow"/><path class="wm-shadow zqgfkv9mp"/><path class="g5_dv9bao"/><path class="pfpm8ezql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:router"} {...others} />);
}

export default Component;
