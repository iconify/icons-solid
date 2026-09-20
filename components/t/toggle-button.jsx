import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae849gbxa.css';
import '../../css/w/whpf26m9n.css';
import '../../css/v/v-rj1wiga.css';
import '../../css/y/y_kbm9bnk.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/a/a0zji3iak.css';
import '../../css/r/r3k27abxv.css';
import '../../css/u/ur1f9l1qm.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ae849gbxa"><path class="whpf26m9n"/><circle class="v-rj1wiga"/><path class="y_kbm9bnk"/></g><g class="ij2x_72vy"><path class="a0zji3iak"/><circle class="r3k27abxv"/><path class="ur1f9l1qm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:toggle-button"} {...others} />);
}

export default Component;
