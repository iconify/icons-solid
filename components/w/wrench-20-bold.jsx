import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tlfvtxb2w.css';
import '../../css/l/lylog5b5f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tlfvtxb2w"/><path class="lylog5b5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wrench-20-bold"} {...others} />);
}

export default Component;
