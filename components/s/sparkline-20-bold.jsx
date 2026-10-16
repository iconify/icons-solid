import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v945mrjcg.css';
import '../../css/l/l2m0plbaz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v945mrjcg"/><path class="l2m0plbaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sparkline-20-bold"} {...others} />);
}

export default Component;
