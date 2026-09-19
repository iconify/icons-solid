import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gbr0y_b-p.css';
import '../../css/d/dif89hb-x.css';
import '../../css/q/q366ogo9u.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gbr0y_b-p"/><path clip-rule="evenodd" class="dif89hb-x"/><path class="q366ogo9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:shield-exclamation"} {...others} />);
}

export default Component;
