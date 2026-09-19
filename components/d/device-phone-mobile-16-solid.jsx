import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qr_jcmkbu.css';
import '../../css/k/k589qfbqh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qr_jcmkbu"/><path clip-rule="evenodd" class="k589qfbqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:device-phone-mobile-16-solid"} {...others} />);
}

export default Component;
