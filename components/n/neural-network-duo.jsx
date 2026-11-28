import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0w1k03ox.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mie73d_2w.css';
import '../../css/w/w5tkj2b5c.css';
import '../../css/n/nfngpf0kl.css';
import '../../css/c/ck42blb_w.css';
import '../../css/c/ch1o-g7vx.css';
import '../../css/f/fbq28x_vl.css';
import '../../css/y/y7ay94b0b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary v0w1k03ox"/><g class="dt0cm9dhy primary"><path class="mie73d_2w"/><path class="w5tkj2b5c"/><path class="nfngpf0kl"/><path class="ck42blb_w"/><path class="ch1o-g7vx"/><path class="fbq28x_vl"/><path class="y7ay94b0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:neural-network-duo"} {...others} />);
}

export default Component;
