import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtv-45bls.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wtv-45bls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:gable-roofed-shelter"} {...others} />);
}

export default Component;
