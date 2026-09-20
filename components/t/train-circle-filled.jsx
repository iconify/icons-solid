import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/c/ciwk43b4p.css';
import '../../css/l/lt-gj_bes.css';
import '../../css/e/e8prs8-2z.css';
import '../../css/k/k5ydo-boy.css';
import '../../css/v/vz8k7tp9s.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGPGo6aevj"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="ciwk43b4p"/><path clip-rule="evenodd" class="lt-gj_bes"/><path class="e8prs8-2z"/><path clip-rule="evenodd" class="k5ydo-boy"/><path class="vz8k7tp9s"/></g></mask></defs><circle mask="url(#SVGPGo6aevj)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:train-circle-filled"} {...others} />);
}

export default Component;
