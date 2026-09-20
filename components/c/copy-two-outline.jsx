import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wiazg2b_n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wiazg2b_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:copy-two-outline"} {...others} />);
}

export default Component;
