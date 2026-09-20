import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4sx8wmoh.css';
import '../../css/d/d0osc_bpo.css';
import '../../css/h/hpmc1obus.css';

const viewBox = {"width":2159,"height":500};
const content = `<path class="o4sx8wmoh"/><path class="d0osc_bpo"/><path class="hpmc1obus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:together-ai-light"} {...others} />);
}

export default Component;
