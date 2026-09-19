import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvpe0elkl.css';
import '../../css/k/k3c3_wb5t.css';
import '../../css/w/wmdyppz_d.css';
import '../../css/q/qw34ubbdm.css';
import '../../css/m/m-7tuu_6k.css';
import '../../css/n/n7oppivbj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qvpe0elkl"/><path class="k3c3_wb5t"/><path class="wmdyppz_d"/><path class="qw34ubbdm"/><path class="m-7tuu_6k"/><path class="n7oppivbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:dogside"} {...others} />);
}

export default Component;
