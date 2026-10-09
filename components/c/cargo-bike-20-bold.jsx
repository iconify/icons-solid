import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb372ubhj.css';
import '../../css/o/o-12cxn9d.css';
import '../../css/u/um9exwbhi.css';
import '../../css/s/srk7xmv-b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tb372ubhj"/><path class="o-12cxn9d"/><path class="um9exwbhi"/><path class="srk7xmv-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cargo-bike-20-bold"} {...others} />);
}

export default Component;
