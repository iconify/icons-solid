import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxz4xdoel.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="qxz4xdoel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-weather-moon-astronomy-moon-science-space-crescent"} {...others} />);
}

export default Component;
