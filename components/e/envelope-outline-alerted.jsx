import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aks1zrbnk.css';
import '../../css/q/qy7dv0tza.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="aks1zrbnk clr-i-outline--alerted clr-i-outline-path-1--alerted"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-2--alerted qy7dv0tza"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:envelope-outline-alerted"} {...others} />);
}

export default Component;
