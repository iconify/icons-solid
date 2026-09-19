import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/o5vbpf6wd.css';
import '../../css/f/fm7vl8brq.css';
import '../../css/m/m6z6jwini.css';
import '../../css/i/ii7el3b_p.css';
import '../../css/s/szfe2wj7e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="o5vbpf6wd"/><path class="fm7vl8brq"/><path class="m6z6jwini"/><path class="ii7el3b_p"/><path class="szfe2wj7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:text-style-one"} {...others} />);
}

export default Component;
