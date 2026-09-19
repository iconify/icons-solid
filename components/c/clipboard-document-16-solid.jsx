import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymn_uab8u.css';
import '../../css/x/xpn17_exa.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ymn_uab8u"/><path class="xpn17_exa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:clipboard-document-16-solid"} {...others} />);
}

export default Component;
