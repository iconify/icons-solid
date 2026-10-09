import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7068hixw.css';
import '../../css/w/wrndbwbhd.css';
import '../../css/x/xl7e6nsec.css';
import '../../css/z/zmnvrybwh.css';
import '../../css/s/sye-frbjv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i7068hixw"/><path class="wrndbwbhd"/><path class="xl7e6nsec"/><path class="zmnvrybwh"/><path class="sye-frbjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:methane-48-bold"} {...others} />);
}

export default Component;
