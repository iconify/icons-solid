import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/l/l6wvh8_6j.css';
import '../../css/i/if1j1ik3f.css';
import '../../css/a/ao8xynqyd.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVG7tXnzd6i"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="l6wvh8_6j"/><path class="if1j1ik3f"/><path class="ao8xynqyd"/></g></mask></defs><circle mask="url(#SVG7tXnzd6i)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:arrow-left-circle-filled"} {...others} />);
}

export default Component;
