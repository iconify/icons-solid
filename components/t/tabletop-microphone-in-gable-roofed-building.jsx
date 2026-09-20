import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfs99hb8j.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mfs99hb8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tabletop-microphone-in-gable-roofed-building"} {...others} />);
}

export default Component;
