import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/patlzsgzl.css';
import '../../css/d/dvh2bwuis.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="patlzsgzl"/><path class="dvh2bwuis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:headphones"} {...others} />);
}

export default Component;
