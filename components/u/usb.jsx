import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gl6d0daue.css';
import '../../css/h/hnlide_cb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gl6d0daue"/><path class="hnlide_cb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:usb"} {...others} />);
}

export default Component;
