import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kjopbq_ry.css';
import '../../css/r/rrbhc-fdi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kjopbq_ry"/><path class="rrbhc-fdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:dependabot-16"} {...others} />);
}

export default Component;
