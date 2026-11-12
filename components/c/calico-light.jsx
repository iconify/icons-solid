import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kp79mfbbx.css';
import '../../css/w/wkurt-npl.css';
import '../../css/g/gk6duor4d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kp79mfbbx"/><path class="wkurt-npl"/><path class="gk6duor4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:calico-light"} {...others} />);
}

export default Component;
