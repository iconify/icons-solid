import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2cq_3tqj.css';
import '../../css/w/wil24ls7u.css';
import '../../css/s/s59jrqbcz.css';
import '../../css/n/ncuomcblu.css';
import '../../css/q/qnh2bvbjz.css';
import '../../css/q/q3x1afj2b.css';
import '../../css/c/c1dk7lb7t.css';

const viewBox = {"width":52,"height":28};
const content = `<g class="o2cq_3tqj"><path class="wil24ls7u"/><path class="s59jrqbcz"/><path class="ncuomcblu"/><path class="qnh2bvbjz"/><path class="q3x1afj2b"/><path class="c1dk7lb7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:posthog"} {...others} />);
}

export default Component;
