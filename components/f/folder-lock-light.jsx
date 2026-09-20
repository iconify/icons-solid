import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udtztp8ns.css';
import '../../css/w/wc5zi-5ib.css';
import '../../css/n/nlwj_sxhn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="udtztp8ns"/><path clip-rule="evenodd" class="wc5zi-5ib"/><path clip-rule="evenodd" class="nlwj_sxhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:folder-lock-light"} {...others} />);
}

export default Component;
