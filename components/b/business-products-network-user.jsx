import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkdtjjbjw.css';
import '../../css/d/dt3455rte.css';
import '../../css/w/wd_zv6bvb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lkdtjjbjw"/><path class="dt3455rte"/><path class="wd_zv6bvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-products-network-user"} {...others} />);
}

export default Component;
