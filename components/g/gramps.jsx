import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7mo8bc3w.css';
import '../../css/r/r_0xaqvjf.css';
import '../../css/k/kv3-vvb4u.css';
import '../../css/d/dw3-q2i6z.css';
import '../../css/j/jf89ztqqu.css';
import '../../css/e/epe-gtp-z.css';
import '../../css/f/faewmjb3x.css';
import '../../css/q/qg1d66b2a.css';
import '../../css/e/e1i015ois.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b7mo8bc3w"/><path class="r_0xaqvjf"/><path class="kv3-vvb4u"/><path class="dw3-q2i6z"/><path class="jf89ztqqu"/><path class="epe-gtp-z"/><path class="faewmjb3x"/><path class="qg1d66b2a"/><path class="e1i015ois"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gramps"} {...others} />);
}

export default Component;
