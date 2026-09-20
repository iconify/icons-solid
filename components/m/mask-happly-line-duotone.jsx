import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lja5d1zkk.css';
import '../../css/n/nxyeq8w_t.css';
import '../../css/r/r4ng58brp.css';
import '../../css/s/s6e9m8adu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lja5d1zkk"/><path class="nxyeq8w_t"/><path class="r4ng58brp"/><path class="s6e9m8adu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mask-happly-line-duotone"} {...others} />);
}

export default Component;
