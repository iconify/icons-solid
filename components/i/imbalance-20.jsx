import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hu_t3tbfu.css';
import '../../css/s/syzt_cbmk.css';
import '../../css/n/n0oj8po7r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hu_t3tbfu"/><path class="syzt_cbmk"/><path class="n0oj8po7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:imbalance-20"} {...others} />);
}

export default Component;
