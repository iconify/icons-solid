import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/x/xgqlv96ro.css';
import '../../css/o/o7p2p4bww.css';
import '../../css/x/xeo3lccmm.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVG9xrEcdpP"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="xgqlv96ro"/><path clip-rule="evenodd" class="o7p2p4bww"/><path class="xeo3lccmm"/></g></mask></defs><circle mask="url(#SVG9xrEcdpP)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:internet-circle-filled"} {...others} />);
}

export default Component;
