import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmeesubxi.css';
import '../../css/l/l08ji0b1b.css';
import '../../css/q/q8whoub3o.css';
import '../../css/b/bi6rp_ibq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rmeesubxi"/><path class="l08ji0b1b"/><path class="q8whoub3o"/><path class="bi6rp_ibq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sakebottleandcup"} {...others} />);
}

export default Component;
