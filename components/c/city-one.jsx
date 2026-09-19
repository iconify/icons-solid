import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bgr4__y9v.css';
import '../../css/a/aqf33k9ku.css';
import '../../css/f/f_cwpgbyn.css';
import '../../css/l/l0y6kqsdf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="bgr4__y9v"/><rect class="aqf33k9ku"/><rect class="f_cwpgbyn"/><path class="l0y6kqsdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:city-one"} {...others} />);
}

export default Component;
