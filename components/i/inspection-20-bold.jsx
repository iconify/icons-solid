import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yz7gt-bls.css';
import '../../css/f/fga2-cbvt.css';
import '../../css/n/n8zhxcbkd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yz7gt-bls"/><path class="fga2-cbvt"/><path class="n8zhxcbkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:inspection-20-bold"} {...others} />);
}

export default Component;
