import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gxh-1lbdu.css';
import '../../css/w/w0c61wvcr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gxh-1lbdu"/><path class="w0c61wvcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:closet"} {...others} />);
}

export default Component;
