import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wr69-xtna.css';
import '../../css/w/wiio0dv1h.css';
import '../../css/y/y30wx3bxw.css';
import '../../css/e/eb9k8rbnj.css';
import '../../css/d/dt_jyzneu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wr69-xtna"/><path class="wiio0dv1h"/><path class="y30wx3bxw"/><path class="eb9k8rbnj"/><path class="dt_jyzneu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ashim"} {...others} />);
}

export default Component;
