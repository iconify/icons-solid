import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rtny4kbqq.css';
import '../../css/s/ss0gbbcxt.css';
import '../../css/x/xih1z7baw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="rtny4kbqq wm-shadow"/><path class="ss0gbbcxt wm-shadow"/><path class="xih1z7baw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:snowflake"} {...others} />);
}

export default Component;
