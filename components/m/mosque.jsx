import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eteg0p_hh.css';
import '../../css/m/moovfjb1o.css';
import '../../css/w/wv20y01dm.css';
import '../../css/d/decwnrb2a.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="eteg0p_hh"/><path class="moovfjb1o"/><path class="wv20y01dm"/><path class="decwnrb2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mosque"} {...others} />);
}

export default Component;
