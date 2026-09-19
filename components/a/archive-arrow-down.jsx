import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4u2r3x1n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d4u2r3x1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:archive-arrow-down"} {...others} />);
}

export default Component;
