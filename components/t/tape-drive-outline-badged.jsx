import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/liq-m1brr.css';
import '../../css/l/leog74bne.css';
import '../../css/u/u03d60_zk.css';
import '../../css/l/lmf0ecbhq.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="liq-m1brr"/><path class="leog74bne"/><path class="u03d60_zk"/><circle class="lmf0ecbhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:tape-drive-outline-badged"} {...others} />);
}

export default Component;
