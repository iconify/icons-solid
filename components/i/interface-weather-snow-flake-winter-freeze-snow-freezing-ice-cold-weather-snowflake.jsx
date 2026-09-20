import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dd275sbvw.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="dd275sbvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-weather-snow-flake-winter-freeze-snow-freezing-ice-cold-weather-snowflake"} {...others} />);
}

export default Component;
