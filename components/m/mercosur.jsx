import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmibc4bxr.css';
import '../../css/p/pvppo8lbv.css';
import '../../css/r/rp7v3sbxc.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nmibc4bxr"/><path class="pvppo8lbv"/><path class="rp7v3sbxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:mercosur"} {...others} />);
}

export default Component;
