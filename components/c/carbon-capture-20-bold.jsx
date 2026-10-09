import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8xiwibfs.css';
import '../../css/f/fad7f9tkf.css';
import '../../css/n/np3f-jntl.css';
import '../../css/d/dcgjitb9o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z8xiwibfs"/><path class="fad7f9tkf"/><path class="np3f-jntl"/><path class="dcgjitb9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-capture-20-bold"} {...others} />);
}

export default Component;
