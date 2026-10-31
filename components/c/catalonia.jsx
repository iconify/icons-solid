import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjp3yo8sn.css';
import '../../css/u/ux9cdwbcv.css';
import '../../css/b/bt0mqnb_p.css';
import '../../css/t/t41k8723w.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="fjp3yo8sn"/><path class="ux9cdwbcv"/><path class="bt0mqnb_p"/><path class="t41k8723w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:catalonia"} {...others} />);
}

export default Component;
