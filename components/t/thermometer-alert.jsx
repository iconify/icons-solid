import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r89ba2b_j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r89ba2b_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:thermometer-alert"} {...others} />);
}

export default Component;
