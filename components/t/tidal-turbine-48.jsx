import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hd-rzr2nq.css';
import '../../css/w/wc-l3tw1u.css';
import '../../css/i/ifvme1b3v.css';
import '../../css/y/yq27hl_bf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hd-rzr2nq"/><path class="wc-l3tw1u"/><path class="ifvme1b3v"/><path class="yq27hl_bf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tidal-turbine-48"} {...others} />);
}

export default Component;
