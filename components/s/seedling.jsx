import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hil72j73a.css';
import '../../css/j/ji2y3-dyw.css';
import '../../css/u/ub6hd3a0n.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hil72j73a"/><path class="ji2y3-dyw"/><path class="ub6hd3a0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:seedling"} {...others} />);
}

export default Component;
