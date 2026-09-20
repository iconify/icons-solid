import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amy3jaclb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="amy3jaclb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:three-bars-16"} {...others} />);
}

export default Component;
