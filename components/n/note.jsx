import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/r/ru3n1acww.css';
import '../../css/l/lgzmhqtyx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="s9cl3zbei"><rect class="ru3n1acww"/><path class="lgzmhqtyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:note"} {...others} />);
}

export default Component;
