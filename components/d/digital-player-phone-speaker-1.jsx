import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k0t9i_b0d.css';
import '../../css/g/gk5k1jscl.css';
import '../../css/h/hxczxmvle.css';
import '../../css/y/y_0-tfzwl.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k0t9i_b0d"/><path class="gk5k1jscl"/><path class="hxczxmvle"/><path class="y_0-tfzwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:digital-player-phone-speaker-1"} {...others} />);
}

export default Component;
