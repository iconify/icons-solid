import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdpvcx5fg.css';
import '../../css/l/let930hzr.css';
import '../../css/v/vm0fdnsds.css';
import '../../css/g/ggecnicnh.css';
import '../../css/k/ks5c-ibyv.css';
import '../../css/g/gz0-gabhb.css';
import '../../css/w/wuzb9pbwx.css';
import '../../css/l/lxgjikmhg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gdpvcx5fg wm-shadow"/><path class="let930hzr wm-k"/><path class="vm0fdnsds wm-k"/><path class="ggecnicnh wm-k"/><path class="ks5c-ibyv wm-k"/><path class="gz0-gabhb wm-shine"/><path class="wm-k wuzb9pbwx"/><path class="lxgjikmhg wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:fingerprint"} {...others} />);
}

export default Component;
