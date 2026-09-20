import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5yhmcb_r.css';

const viewBox = {"width":14,"height":16};
const content = `<path class="w5yhmcb_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:shield"} {...others} />);
}

export default Component;
