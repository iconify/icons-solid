import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iaet4wb5s.css';
import '../../css/i/inqjblbsz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iaet4wb5s"/><path class="inqjblbsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:aspect-ratio-48-bold"} {...others} />);
}

export default Component;
