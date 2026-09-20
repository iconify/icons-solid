import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dx5ve9brb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dx5ve9brb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:tasklist-16"} {...others} />);
}

export default Component;
