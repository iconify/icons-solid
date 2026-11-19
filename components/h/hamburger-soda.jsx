import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/brqbl39rw.css';
import '../../css/s/s4zj1blvg.css';
import '../../css/o/oxdveh3nx.css';
import '../../css/k/k-s1bvbge.css';
import '../../css/s/s77cbho2l.css';
import '../../css/w/woduvkw3f.css';
import '../../css/k/km5ownb6c.css';
import '../../css/k/kk1hspboq.css';
import '../../css/l/l0wfvi9yb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="brqbl39rw"/><path class="s4zj1blvg"/><path class="oxdveh3nx"/><path class="k-s1bvbge"/><path class="s77cbho2l"/><path class="woduvkw3f"/><path class="km5ownb6c"/><path class="kk1hspboq"/><path class="l0wfvi9yb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hamburger-soda"} {...others} />);
}

export default Component;
