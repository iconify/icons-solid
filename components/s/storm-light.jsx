import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivjvz2eii.css';
import '../../css/a/agskb_9rt.css';
import '../../css/w/wn6k-hbqx.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zwiip4byr.css';
import '../../css/m/mi-ot3b-h.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGe4Kw9cYk" width="10" height="13" x="7" y="9" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="agskb_9rt"/><path class="wn6k-hbqx"/></mask><g class="ft5dv1b6b"><path mask="url(#SVGe4Kw9cYk)" class="zwiip4byr"/><path clip-rule="evenodd" class="mi-ot3b-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:storm-light"} {...others} />);
}

export default Component;
