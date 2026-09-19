import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xkadzabjm.css';
import '../../css/y/y-aykgvmv.css';
import '../../css/i/ivgr-ipsd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xkadzabjm"/><path class="y-aykgvmv"/><path class="ivgr-ipsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:telephone"} {...others} />);
}

export default Component;
