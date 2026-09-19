import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wx6l9tbvt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wx6l9tbvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:box"} {...others} />);
}

export default Component;
