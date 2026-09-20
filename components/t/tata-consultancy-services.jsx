import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7q3c8i4a.css';

const viewBox = {"width":956.693,"height":342.992};
const content = `<path class="n7q3c8i4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tata-consultancy-services"} {...others} />);
}

export default Component;
