import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lj_qicchw.css';
import '../../css/m/mgkbe6uxk.css';
import '../../css/i/i7sr6ubzr.css';
import '../../css/g/g3gxxib9z.css';
import '../../css/s/sdj3236vq.css';
import '../../css/a/a8a4agb2w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lj_qicchw"/><path class="mgkbe6uxk"/><path class="i7sr6ubzr"/><path class="g3gxxib9z"/><path class="sdj3236vq"/><path class="a8a4agb2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-scheduler"} {...others} />);
}

export default Component;
