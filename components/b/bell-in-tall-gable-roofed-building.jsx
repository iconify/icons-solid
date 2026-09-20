import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvdl01b3e.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zvdl01b3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bell-in-tall-gable-roofed-building"} {...others} />);
}

export default Component;
