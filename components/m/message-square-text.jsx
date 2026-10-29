import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_ayjnbdt.css';
import '../../css/i/isl3m2b0d.css';
import '../../css/s/skvpkpb4h.css';
import '../../css/t/t2_ov7btj.css';
import '../../css/d/d67euubmh.css';
import '../../css/d/dj9al3b0t.css';
import '../../css/l/lziqfqjpz.css';
import '../../css/y/ycrfcdbeo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e_ayjnbdt wm-shadow"/><path class="isl3m2b0d wm-k"/><path class="skvpkpb4h wm-k"/><path class="t2_ov7btj wm-k"/><path class="d67euubmh wm-k"/><path class="dj9al3b0t wm-shine"/><path class="lziqfqjpz wm-k"/><path class="wm-a ycrfcdbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:message-square-text"} {...others} />);
}

export default Component;
