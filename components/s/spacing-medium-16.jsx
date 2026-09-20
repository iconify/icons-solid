import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pysa468mj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pysa468mj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:spacing-medium-16"} {...others} />);
}

export default Component;
