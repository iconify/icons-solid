import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/stn-06qyn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="stn-06qyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:temperature-fahrenheit"} {...others} />);
}

export default Component;
