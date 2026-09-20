import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3824eb3w.css';
import '../../css/u/u5_58bctg.css';
import '../../css/k/kpmaaubsa.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="l3824eb3w"/><path class="u5_58bctg"/><path class="kpmaaubsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:glass-of-milk"} {...others} />);
}

export default Component;
