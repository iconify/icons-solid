import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkyeehahd.css';
import '../../css/p/pbscpxb8w.css';
import '../../css/m/mi0x-nbtx.css';
import '../../css/d/docs2bmhn.css';
import '../../css/j/jz98eg2_s.css';
import '../../css/b/bx1k6rn6e.css';
import '../../css/l/lm66ohk1f.css';
import '../../css/d/dx57-eo4k.css';
import '../../css/c/c7a2awb_o.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mkyeehahd"/><path class="pbscpxb8w"/><circle class="mi0x-nbtx"/><path class="docs2bmhn"/><circle class="jz98eg2_s"/><path class="bx1k6rn6e"/><path class="lm66ohk1f"/><path class="dx57-eo4k"/><path class="c7a2awb_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:monkey-face"} {...others} />);
}

export default Component;
