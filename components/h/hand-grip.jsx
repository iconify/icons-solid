import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gvx73yb2f.css';
import '../../css/j/jrp9cab6c.css';
import '../../css/c/cbxuw3bxz.css';
import '../../css/q/q5sl9ebqd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gvx73yb2f"/><path class="jrp9cab6c"/><path class="cbxuw3bxz"/><path class="q5sl9ebqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hand-grip"} {...others} />);
}

export default Component;
