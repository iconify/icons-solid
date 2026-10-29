import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ksvp83bbe.css';
import '../../css/e/enwh9ccup.css';
import '../../css/n/nfl27rnaj.css';
import '../../css/z/zi-vuibgq.css';
import '../../css/g/g1o0-0bfl.css';
import '../../css/o/ot97eesel.css';
import '../../css/l/l2xy7mksm.css';
import '../../css/f/f9z9tgbch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ksvp83bbe wm-k"/><path class="enwh9ccup wm-k"/><path class="nfl27rnaj wm-k"/><path class="wm-shine zi-vuibgq"/><path class="g1o0-0bfl wm-a"/><path class="ot97eesel wm-a"/><path class="l2xy7mksm wm-a"/><path class="f9z9tgbch wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:mehndi-hand"} {...others} />);
}

export default Component;
