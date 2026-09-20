import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/xcfpei2wj.css';
import '../../css/l/l59fdgwlk.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="xcfpei2wj"/><path class="l59fdgwlk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:agenda-left"} {...others} />);
}

export default Component;
