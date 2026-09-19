import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ka-seacgp.css';
import '../../css/c/c-9rkjgot.css';
import '../../css/i/i__a0oooy.css';
import '../../css/z/z_jsjpbaa.css';
import '../../css/n/n7pd2ab8h.css';
import '../../css/u/ugo0tuwgj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ka-seacgp"/><circle class="c-9rkjgot"/><path class="i__a0oooy"/><circle class="z_jsjpbaa"/><path class="n7pd2ab8h"/><circle class="ugo0tuwgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:blur"} {...others} />);
}

export default Component;
