import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fscbk5btm.css';
import '../../css/i/i1rcpxbal.css';
import '../../css/l/lk_wy274k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fscbk5btm"/><path class="i1rcpxbal"/><path class="lk_wy274k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gangway-20-bold"} {...others} />);
}

export default Component;
