import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l6oezyeac.css';
import '../../css/g/gm5t77b-c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l6oezyeac"/><path class="gm5t77b-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:mobile-check"} {...others} />);
}

export default Component;
