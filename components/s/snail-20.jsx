import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e78tbzb1q.css';
import '../../css/v/v5kipyuxv.css';
import '../../css/d/dw5ylqojm.css';
import '../../css/x/x6hzufb5p.css';
import '../../css/t/to-zwy-np.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e78tbzb1q"/><path class="v5kipyuxv"/><path class="dw5ylqojm"/><path class="x6hzufb5p"/><path class="to-zwy-np"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:snail-20"} {...others} />);
}

export default Component;
