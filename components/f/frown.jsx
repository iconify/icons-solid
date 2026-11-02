import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/et0aljbre.css';
import '../../css/j/jd6qz6uvx.css';
import '../../css/e/evn8-tb-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="et0aljbre"/><path class="jd6qz6uvx"/><path class="evn8-tb-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:frown"} {...others} />);
}

export default Component;
