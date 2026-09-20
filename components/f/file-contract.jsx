import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wl0ks-bnl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wl0ks-bnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:file-contract"} {...others} />);
}

export default Component;
