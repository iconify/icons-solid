import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zuveebb1b.css';
import '../../css/z/ziroa4b5h.css';
import '../../css/b/b3g5khbzy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zuveebb1b"/><path class="ziroa4b5h"/><path class="b3g5khbzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-alert-20-bold"} {...others} />);
}

export default Component;
