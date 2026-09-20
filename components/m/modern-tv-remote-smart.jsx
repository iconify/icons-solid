import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ojwneybih.css';
import '../../css/f/fxoem8brg.css';
import '../../css/r/rqj9erb8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ojwneybih"/><path class="fxoem8brg"/><path class="rqj9erb8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:modern-tv-remote-smart"} {...others} />);
}

export default Component;
