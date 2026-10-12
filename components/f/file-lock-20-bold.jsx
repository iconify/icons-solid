import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1t7v_btd.css';
import '../../css/j/jhru-hx-c.css';
import '../../css/v/vw_n11rmf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x1t7v_btd"/><path class="jhru-hx-c"/><path class="vw_n11rmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-lock-20-bold"} {...others} />);
}

export default Component;
