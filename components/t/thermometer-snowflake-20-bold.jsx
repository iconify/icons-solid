import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mtrh8db_y.css';
import '../../css/x/xz6a5cb-u.css';
import '../../css/b/bbfi5pr6q.css';
import '../../css/f/f0ef-nfej.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mtrh8db_y"/><path class="xz6a5cb-u"/><path class="bbfi5pr6q"/><path class="f0ef-nfej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermometer-snowflake-20-bold"} {...others} />);
}

export default Component;
