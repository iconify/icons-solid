import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u64855bze.css';
import '../../css/m/mbwn3jyka.css';
import '../../css/c/cztbimydz.css';
import '../../css/n/nw8utcb8o.css';
import '../../css/p/po_ri7hik.css';
import '../../css/y/yphfslbyu.css';
import '../../css/c/cowl7bbib.css';
import '../../css/q/quuyyebgn.css';
import '../../css/z/z8_-ddbkk.css';
import '../../css/p/pmkq21buc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u64855bze wm-shadow"/><path class="mbwn3jyka wm-k"/><path class="cztbimydz wm-k"/><path class="nw8utcb8o wm-k"/><path class="po_ri7hik wm-k"/><path class="wm-k yphfslbyu"/><path class="cowl7bbib wm-k"/><path class="quuyyebgn wm-k"/><path class="wm-k z8_-ddbkk"/><path class="pmkq21buc wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:glasses"} {...others} />);
}

export default Component;
