import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/afvvtb2te.css';
import '../../css/l/lxung_xah.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="afvvtb2te"/><path class="lxung_xah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-grid-view"} {...others} />);
}

export default Component;
