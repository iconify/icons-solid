import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh8ic0_ra.css';
import '../../css/x/xtvx8sn3q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zh8ic0_ra"/><circle class="xtvx8sn3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:medinv-light"} {...others} />);
}

export default Component;
