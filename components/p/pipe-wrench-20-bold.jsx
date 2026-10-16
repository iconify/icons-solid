import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gr-sxkt2n.css';
import '../../css/p/poccklbbx.css';
import '../../css/h/hhujsxb0y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gr-sxkt2n"/><path class="poccklbbx"/><path class="hhujsxb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-wrench-20-bold"} {...others} />);
}

export default Component;
