import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h0di04cct.css';
import '../../css/w/wrptp5blq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="h0di04cct"/><path class="wrptp5blq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:post"} {...others} />);
}

export default Component;
