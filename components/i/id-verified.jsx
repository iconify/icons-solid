import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pzxv190ut.css';
import '../../css/x/xuz284bnw.css';
import '../../css/r/rysm2pqae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pzxv190ut"/><circle class="xuz284bnw"/><path class="rysm2pqae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:id-verified"} {...others} />);
}

export default Component;
