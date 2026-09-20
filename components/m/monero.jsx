import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ur-d651vm.css';
import '../../css/n/nzbz80bhw.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="ur-d651vm"/><path class="nzbz80bhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:monero"} {...others} />);
}

export default Component;
