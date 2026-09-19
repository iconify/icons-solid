import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzoe01kfd.css';
import '../../css/q/qdd1rtb9m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pzoe01kfd"/><circle class="qdd1rtb9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:sunny-outline"} {...others} />);
}

export default Component;
