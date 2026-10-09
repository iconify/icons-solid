import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxmq_uzjj.css';
import '../../css/o/o8au-u-tj.css';
import '../../css/z/zi_t7ybkv.css';
import '../../css/p/pv-y02gkc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kxmq_uzjj"/><path class="o8au-u-tj"/><path class="zi_t7ybkv"/><path class="pv-y02gkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:podcast-20-bold"} {...others} />);
}

export default Component;
