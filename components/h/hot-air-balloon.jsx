import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f-ceaxs0e.css';
import '../../css/n/nklb3x5wx.css';
import '../../css/o/okq48lvzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="f-ceaxs0e"/><path class="nklb3x5wx"/><path class="okq48lvzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hot-air-balloon"} {...others} />);
}

export default Component;
