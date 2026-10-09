import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqdv09daf.css';
import '../../css/b/bkmyoo3vr.css';
import '../../css/x/xj4uzj6yg.css';
import '../../css/x/xoajh0bqz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hqdv09daf"/><path class="bkmyoo3vr"/><path class="xj4uzj6yg"/><path class="xoajh0bqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermometer-snowflake-48"} {...others} />);
}

export default Component;
