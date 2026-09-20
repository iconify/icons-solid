import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/smxycjv8r.css';
import '../../css/y/yg5kv2hph.css';
import '../../css/a/axx9m59wr.css';
import '../../css/r/rfavqvugw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="smxycjv8r"/><path class="yg5kv2hph"/><path class="axx9m59wr"/><path class="rfavqvugw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chair-2-line-duotone"} {...others} />);
}

export default Component;
