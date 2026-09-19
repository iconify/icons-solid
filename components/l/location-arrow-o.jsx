import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok5msxpqv.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ok5msxpqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:location-arrow-o"} {...others} />);
}

export default Component;
