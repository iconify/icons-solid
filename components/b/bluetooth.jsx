import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfcsewbho.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xfcsewbho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:bluetooth"} {...others} />);
}

export default Component;
