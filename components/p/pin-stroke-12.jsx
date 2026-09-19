import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zn6mf84ka.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="zn6mf84ka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:pin-stroke-12"} {...others} />);
}

export default Component;
