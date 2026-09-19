import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp8nbac8k.css';
import '../../css/r/rxv6h2qkg.css';
import '../../css/d/dw2ho37lk.css';
import '../../css/r/rn3sxcbzd.css';
import '../../css/l/ls5agxbrg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fp8nbac8k"/><path class="rxv6h2qkg"/><path class="dw2ho37lk"/><rect transform="rotate(30 21 4)" class="rn3sxcbzd"/><rect transform="rotate(30 13 17.856)" class="ls5agxbrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:gavel"} {...others} />);
}

export default Component;
