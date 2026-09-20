import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obm3mkxem.css';
import '../../css/v/vw1b76hol.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="obm3mkxem"/><path class="vw1b76hol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:map-navigation-pin-location-2"} {...others} />);
}

export default Component;
