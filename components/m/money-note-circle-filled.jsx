import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/w/w1o7y9xxt.css';
import '../../css/s/skf2rrc2o.css';
import '../../css/q/q79iqun2t.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGi7M9tbIt"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="w1o7y9xxt"/><path class="skf2rrc2o"/><path clip-rule="evenodd" class="q79iqun2t"/></g></mask></defs><circle mask="url(#SVGi7M9tbIt)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:money-note-circle-filled"} {...others} />);
}

export default Component;
