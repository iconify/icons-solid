import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5a4g0baj.css';
import '../../css/i/ifr7ntl_w.css';
import '../../css/c/csa2n4lwk.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="f5a4g0baj"/><path class="ifr7ntl_w"/><path class="csa2n4lwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:canoe"} {...others} />);
}

export default Component;
