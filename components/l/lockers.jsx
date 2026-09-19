import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pzsh4ib_v.css';
import '../../css/g/gd5p6sbdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="pzsh4ib_v"/><path class="gd5p6sbdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:lockers"} {...others} />);
}

export default Component;
