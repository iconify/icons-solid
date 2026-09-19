import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzp_awbau.css';
import '../../css/n/nar_pyley.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pzp_awbau"/><path class="nar_pyley"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:return-up-back-outline"} {...others} />);
}

export default Component;
