import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rwwixqy8h.css';
import '../../css/g/gn3v4ubtn.css';
import '../../css/s/swxcbrbza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rwwixqy8h"/><path class="gn3v4ubtn"/><path class="swxcbrbza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:start-up-02"} {...others} />);
}

export default Component;
