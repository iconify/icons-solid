import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcban3aua.css';
import '../../css/e/e-ve9cb9u.css';
import '../../css/m/mx167_wwg.css';
import '../../css/d/djnydgbsy.css';
import '../../css/q/q77pd_b3k.css';
import '../../css/n/nqtpc6zzj.css';
import '../../css/d/d4p-swhse.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gcban3aua wm-shadow"/><path class="e-ve9cb9u wm-k"/><path class="mx167_wwg wm-k"/><path class="djnydgbsy wm-k"/><path class="q77pd_b3k wm-k"/><path class="nqtpc6zzj wm-k"/><path class="d4p-swhse wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:quote"} {...others} />);
}

export default Component;
