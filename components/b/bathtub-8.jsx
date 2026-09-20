import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/z/zhtvj7bsl.css';
import '../../css/h/h6i_htcam.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="zhtvj7bsl"/><path class="h6i_htcam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:bathtub-8"} {...others} />);
}

export default Component;
