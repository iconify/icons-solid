import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftiuf-5wm.css';
import '../../css/h/h2k8cfbxb.css';
import '../../css/j/j_4d_0bxt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ftiuf-5wm"/><circle class="h2k8cfbxb"/><path class="j_4d_0bxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:pod-outlined"} {...others} />);
}

export default Component;
