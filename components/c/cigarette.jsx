import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae849gbxa.css';
import '../../css/s/sllwwyblb.css';
import '../../css/d/db38h2b3j.css';
import '../../css/g/gzmjo-0pb.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/s/s5e4rt3pp.css';
import '../../css/s/sx3o5jbzd.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ae849gbxa"><path class="sllwwyblb"/><path class="db38h2b3j"/><path class="gzmjo-0pb"/></g><g class="ij2x_72vy"><path class="s5e4rt3pp"/><path class="sx3o5jbzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cigarette"} {...others} />);
}

export default Component;
