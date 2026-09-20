import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_gwm_bba.css';
import '../../css/x/xvmas6b-z.css';
import '../../css/o/ois2n1s1o.css';
import '../../css/k/kg_t2pb7u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k_gwm_bba"/><path class="xvmas6b-z"/><path class="ois2n1s1o"/><path class="kg_t2pb7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:internet-network-www"} {...others} />);
}

export default Component;
