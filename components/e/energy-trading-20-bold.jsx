import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2pqw85-k.css';
import '../../css/h/h5hitcc0j.css';
import '../../css/i/i_fu6kg3l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d2pqw85-k"/><path class="h5hitcc0j"/><path class="i_fu6kg3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-trading-20-bold"} {...others} />);
}

export default Component;
