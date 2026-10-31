import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wjkbt1b-x.css';
import '../../css/a/a-r84_bep.css';
import '../../css/j/j03oh8bzx.css';
import '../../css/m/m6b9p-b7h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wjkbt1b-x wm-shadow"/><path class="a-r84_bep wm-shadow"/><path class="j03oh8bzx"/><path class="m6b9p-b7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:soup"} {...others} />);
}

export default Component;
