import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzisldv4b.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="mzisldv4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:coord-system-3d"} {...others} />);
}

export default Component;
