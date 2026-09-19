import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flqsglbac.css';
import '../../css/l/l_r5ns7jv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="flqsglbac"/><path class="l_r5ns7jv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-swap"} {...others} />);
}

export default Component;
