import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fl2u2mtnh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fl2u2mtnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:arrow-left-to-line"} {...others} />);
}

export default Component;
