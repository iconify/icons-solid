import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hf1ev1bin.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hf1ev1bin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:shield-16"} {...others} />);
}

export default Component;
