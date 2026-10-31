import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sn2uwpj5a.css';
import '../../css/s/s_il_-wpj.css';
import '../../css/s/s3pbttbpo.css';
import '../../css/g/gtlmrfbva.css';
import '../../css/r/riobllbcg.css';
import '../../css/j/jx6kj-efx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sn2uwpj5a wm-shadow"/><path class="s_il_-wpj"/><path class="s3pbttbpo"/><path class="gtlmrfbva"/><path class="riobllbcg"/><path class="jx6kj-efx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:medal"} {...others} />);
}

export default Component;
