import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqpblyxmw.css';
import '../../css/g/g49fs7bzv.css';
import '../../css/u/u-hmmubte.css';
import '../../css/m/mkzjpdbji.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wqpblyxmw"/><path class="g49fs7bzv"/><path class="u-hmmubte"/><path class="mkzjpdbji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:satellite-dish-20"} {...others} />);
}

export default Component;
