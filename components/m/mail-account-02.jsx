import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wkem_ebde.css';
import '../../css/p/pk8hibb5s.css';
import '../../css/a/avc6w_f8t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wkem_ebde"/><path class="pk8hibb5s"/><path class="avc6w_f8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-account-02"} {...others} />);
}

export default Component;
