import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3i8uzbyg.css';
import '../../css/e/edwthhmnw.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="q3i8uzbyg"/><path class="edwthhmnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:map-location-filled"} {...others} />);
}

export default Component;
