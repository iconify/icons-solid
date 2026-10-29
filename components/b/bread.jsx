import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyzy7u_-w.css';
import '../../css/q/qclo0xb7r.css';
import '../../css/t/t74f551bv.css';
import '../../css/u/u7gz7tv-n.css';
import '../../css/g/g7q8oobsj.css';
import '../../css/e/e83bbbbvz.css';
import '../../css/y/yu_fuezvp.css';
import '../../css/q/q5al7dbdr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kyzy7u_-w wm-shadow"/><path class="qclo0xb7r wm-k"/><path class="t74f551bv wm-k"/><path class="u7gz7tv-n wm-k"/><path class="g7q8oobsj wm-k"/><path class="e83bbbbvz wm-shine"/><path class="wm-k yu_fuezvp"/><path class="q5al7dbdr wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:bread"} {...others} />);
}

export default Component;
