import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/v2w0mmcjd.css';
import '../../css/u/usydi32ak.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="v2w0mmcjd"/><path class="usydi32ak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:note-book"} {...others} />);
}

export default Component;
