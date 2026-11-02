import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/hyr40ccgz.css';
import '../../css/q/qrhm9ybvs.css';
import '../../css/m/ma4i65b8v.css';
import '../../css/y/y9z8ttb4v.css';
import '../../css/v/vl89vw39x.css';
import '../../css/q/q5mpj9b4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="hyr40ccgz"/><path class="qrhm9ybvs"/><path class="ma4i65b8v"/><path class="y9z8ttb4v"/><path class="vl89vw39x"/><path class="q5mpj9b4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:cloud-lightning"} {...others} />);
}

export default Component;
