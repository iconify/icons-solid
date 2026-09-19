import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fztd7-ejl.css';
import '../../css/z/z-fs2bnei.css';
import '../../css/u/usu3v85-l.css';
import '../../css/e/ek40vob5u.css';
import '../../css/f/fszrx5bjq.css';
import '../../css/t/tkq3hce_s.css';
import '../../css/p/pog9k_bra.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fztd7-ejl"/><path class="z-fs2bnei"/><path class="usu3v85-l"/><path class="ek40vob5u"/><path clip-rule="evenodd" class="fszrx5bjq"/><path class="tkq3hce_s"/><path clip-rule="evenodd" class="pog9k_bra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:person-private-bold"} {...others} />);
}

export default Component;
