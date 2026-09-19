import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5piqkb1i.css';
import '../../css/m/ms1j4bchs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e5piqkb1i"/><path class="ms1j4bchs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-ionic-outline"} {...others} />);
}

export default Component;
