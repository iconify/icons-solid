import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wg6agab_p.css';
import '../../css/t/t0-ajfn1i.css';
import '../../css/b/bhsm9ib8g.css';
import '../../css/f/fdf08cccu.css';
import '../../css/f/fcpklr62u.css';
import '../../css/h/h3-dgmbum.css';
import '../../css/h/h3hh20bwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wg6agab_p wm-k"/><path class="t0-ajfn1i wm-k"/><path class="bhsm9ib8g wm-k"/><path class="fdf08cccu wm-shine"/><path class="fcpklr62u wm-a"/><path class="h3-dgmbum wm-a"/><path class="h3hh20bwo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:circle-arrow-up"} {...others} />);
}

export default Component;
