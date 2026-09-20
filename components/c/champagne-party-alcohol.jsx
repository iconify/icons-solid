import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yukgcsb-s.css';
import '../../css/w/wy0wokdtw.css';
import '../../css/v/vt2z7bbie.css';
import '../../css/p/p1n5ojjff.css';
import '../../css/l/lgjrtjb8w.css';
import '../../css/n/neuk23sej.css';
import '../../css/b/bnwejtbxq.css';
import '../../css/i/iw451obwt.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="yukgcsb-s"/><path clip-rule="evenodd" class="wy0wokdtw"/><path class="vt2z7bbie"/><path clip-rule="evenodd" class="p1n5ojjff"/><path class="lgjrtjb8w"/><path class="neuk23sej"/><path class="bnwejtbxq"/><path class="iw451obwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:champagne-party-alcohol"} {...others} />);
}

export default Component;
