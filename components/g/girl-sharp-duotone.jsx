import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/de3fnpb6z.css';
import '../../css/u/u34xcowek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="de3fnpb6z"/><path class="u34xcowek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:girl-sharp-duotone"} {...others} />);
}

export default Component;
