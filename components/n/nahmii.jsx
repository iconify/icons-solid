import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmkv67m6n.css';
import '../../css/i/ig_q7gbac.css';
import '../../css/c/cb6d8-vns.css';
import '../../css/k/k2mplgqek.css';
import '../../css/f/f-l0ifbwe.css';
import '../../css/i/iije299cn.css';
import '../../css/g/gwpsi3srd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fmkv67m6n"/><path class="ig_q7gbac"/><path class="cb6d8-vns"/><path class="k2mplgqek"/><path class="f-l0ifbwe"/><path class="iije299cn"/><path class="gwpsi3srd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:nahmii"} {...others} />);
}

export default Component;
