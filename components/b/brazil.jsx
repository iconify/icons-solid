import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/en0_brpcp.css';
import '../../css/s/sx0whwb_m.css';
import '../../css/j/jnnkanbzp.css';
import '../../css/i/i_umbcdgk.css';
import '../../css/s/slwx9s0lo.css';
import '../../css/n/nfeshnb-t.css';
import '../../css/f/fyydeobbk.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="en0_brpcp"/><path class="sx0whwb_m"/><path class="jnnkanbzp"/><path class="i_umbcdgk"/><path class="slwx9s0lo"/><path class="nfeshnb-t"/><path class="fyydeobbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:brazil"} {...others} />);
}

export default Component;
