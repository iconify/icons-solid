import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/c7poxkbvh.css';
import '../../css/f/ffsthac_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="c7poxkbvh"/><path class="ffsthac_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:archive-sharp-fill"} {...others} />);
}

export default Component;
