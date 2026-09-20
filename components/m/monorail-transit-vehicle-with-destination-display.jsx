import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1uftcb3r.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="p1uftcb3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:monorail-transit-vehicle-with-destination-display"} {...others} />);
}

export default Component;
