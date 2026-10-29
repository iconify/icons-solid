import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffs0qwgmq.css';
import '../../css/r/rx5qoub6o.css';
import '../../css/p/pbf2wcv6o.css';
import '../../css/e/esppmybae.css';
import '../../css/z/z73jifufj.css';
import '../../css/g/gtfb7lbkc.css';
import '../../css/c/c3-ot4ifq.css';
import '../../css/c/c58hmv9ag.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ffs0qwgmq wm-shadow"/><path class="rx5qoub6o wm-k"/><path class="pbf2wcv6o wm-k"/><path class="esppmybae wm-k"/><path class="wm-k z73jifufj"/><path class="gtfb7lbkc wm-k"/><path class="c3-ot4ifq wm-shine"/><path class="c58hmv9ag wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:magnet"} {...others} />);
}

export default Component;
