import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xffij3b0b.css';
import '../../css/s/ss7z2mb1x.css';
import '../../css/n/nqi7nq_zi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xffij3b0b"/><path class="ss7z2mb1x"/><path class="nqi7nq_zi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-cell-20-bold"} {...others} />);
}

export default Component;
