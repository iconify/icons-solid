import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxbx25zyp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nxbx25zyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:sms-8"} {...others} />);
}

export default Component;
