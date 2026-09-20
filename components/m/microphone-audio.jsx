import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/unxfr-b2r.css';
import '../../css/a/alu59k90f.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="unxfr-b2r"/><path class="alu59k90f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:microphone-audio"} {...others} />);
}

export default Component;
