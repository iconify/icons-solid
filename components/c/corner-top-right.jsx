import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzu4lnr2o.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qzu4lnr2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:corner-top-right"} {...others} />);
}

export default Component;
