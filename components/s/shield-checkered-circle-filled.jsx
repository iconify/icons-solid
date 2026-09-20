import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/c/c2xmc696p.css';
import '../../css/l/lpu5gdbsa.css';
import '../../css/e/e67dkccjm.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVG1zkGqeZf"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="c2xmc696p"/><path class="lpu5gdbsa"/><path class="e67dkccjm"/></g></mask></defs><circle mask="url(#SVG1zkGqeZf)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:shield-checkered-circle-filled"} {...others} />);
}

export default Component;
