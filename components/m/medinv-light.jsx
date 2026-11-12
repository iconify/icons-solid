import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh8ic0_ra.css';
import '../../css/j/jr3az-bvq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zh8ic0_ra"/><circle class="jr3az-bvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:medinv-light"} {...others} />);
}

export default Component;
