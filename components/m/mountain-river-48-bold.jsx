import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pni5u1bji.css';
import '../../css/h/hv0sd2vvm.css';
import '../../css/w/w550r6lgv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pni5u1bji"/><path class="hv0sd2vvm"/><path class="w550r6lgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mountain-river-48-bold"} {...others} />);
}

export default Component;
