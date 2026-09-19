import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aj9yn6a4n.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="aj9yn6a4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:bus-map"} {...others} />);
}

export default Component;
