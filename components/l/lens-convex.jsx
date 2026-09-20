import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dn3wd3bmv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dn3wd3bmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:lens-convex"} {...others} />);
}

export default Component;
