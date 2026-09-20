import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/bm5ekcrdj.css';
import '../../css/f/f9psy-bkt.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="bm5ekcrdj"/><path class="f9psy-bkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:double-down-sign"} {...others} />);
}

export default Component;
