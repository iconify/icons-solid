import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vz4uqvbnq.css';
import '../../css/o/otrjacbmg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vz4uqvbnq"/><path class="otrjacbmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:router-signal"} {...others} />);
}

export default Component;
