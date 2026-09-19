import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eg1ohqnca.css';
import '../../css/l/lz-xrpy1h.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><path class="eg1ohqnca"/><rect class="lz-xrpy1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:thumbs-up-fill-12"} {...others} />);
}

export default Component;
