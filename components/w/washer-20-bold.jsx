import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qebrtob4g.css';
import '../../css/e/exrhjpbkr.css';
import '../../css/s/skd1_2bqw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qebrtob4g"/><path class="exrhjpbkr"/><path class="skd1_2bqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:washer-20-bold"} {...others} />);
}

export default Component;
