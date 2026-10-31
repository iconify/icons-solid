import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v8_mh3sgo.css';
import '../../css/o/o5etqbb3w.css';
import '../../css/r/rynldabhx.css';
import '../../css/g/gd5zx2i2r.css';
import '../../css/g/gk01m8bkx.css';
import '../../css/s/s30o_vbad.css';
import '../../css/l/ldb0bybvo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="v8_mh3sgo"/><path class="o5etqbb3w"/><circle class="rynldabhx"/><circle class="gd5zx2i2r"/><path class="gk01m8bkx"/><path class="s30o_vbad"/><path clip-rule="evenodd" class="ldb0bybvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:thinking-face"} {...others} />);
}

export default Component;
