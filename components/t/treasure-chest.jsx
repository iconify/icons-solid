import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/os9zofb_s.css';
import '../../css/n/nr8r42zbz.css';
import '../../css/d/dbtwze04d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="os9zofb_s"/><path class="nr8r42zbz"/><path class="dbtwze04d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:treasure-chest"} {...others} />);
}

export default Component;
