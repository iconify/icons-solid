import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nrttuebta.css';
import '../../css/x/xu--epbdn.css';
import '../../css/v/vnit_-5or.css';
import '../../css/s/s5d51zdjz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="nrttuebta"/><path class="xu--epbdn"/><rect class="vnit_-5or"/><rect class="s5d51zdjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:sort-size-up"} {...others} />);
}

export default Component;
