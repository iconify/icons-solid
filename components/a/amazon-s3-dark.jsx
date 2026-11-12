import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpw_gduhr.css';
import '../../css/m/m-hjm3bkb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xpw_gduhr"/><path class="m-hjm3bkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:amazon-s3-dark"} {...others} />);
}

export default Component;
