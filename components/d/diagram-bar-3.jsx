import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/uort4abkx.css';
import '../../css/u/updoovw1r.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="uort4abkx"/><path class="updoovw1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:diagram-bar-3"} {...others} />);
}

export default Component;
