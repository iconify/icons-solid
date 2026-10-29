import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lyzmnz4zd.css';
import '../../css/k/krnptjbxe.css';
import '../../css/o/oabrderjn.css';
import '../../css/k/kokfi0b9c.css';
import '../../css/g/g4wcdukcc.css';
import '../../css/z/zoclu7wtg.css';
import '../../css/o/o06sic7wt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lyzmnz4zd wm-k"/><path class="krnptjbxe wm-a"/><path class="oabrderjn wm-shadow"/><path class="kokfi0b9c wm-k"/><path class="g4wcdukcc wm-k"/><path class="wm-a zoclu7wtg"/><path class="o06sic7wt wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:reindeer-engrave"} {...others} />);
}

export default Component;
