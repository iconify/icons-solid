import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwhv-n0jk.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="fwhv-n0jk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:stop-outline"} {...others} />);
}

export default Component;
