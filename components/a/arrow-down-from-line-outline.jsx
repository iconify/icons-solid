import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kl21u1gxg.css';
import '../../css/m/mhkgzbcsb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kl21u1gxg"/><path class="mhkgzbcsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-down-from-line-outline"} {...others} />);
}

export default Component;
