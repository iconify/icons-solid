import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2o-8kr3y.css';
import '../../css/q/qx05z4bvk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g2o-8kr3y"/><path class="qx05z4bvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:window"} {...others} />);
}

export default Component;
