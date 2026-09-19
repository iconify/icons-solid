import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5ytazb7c.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="h5ytazb7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:earth-pacific-o"} {...others} />);
}

export default Component;
