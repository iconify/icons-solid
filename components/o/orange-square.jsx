import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bx2r13bpi.css';
import '../../css/q/qy2vo7bko.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bx2r13bpi"/><path class="qy2vo7bko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:orange-square"} {...others} />);
}

export default Component;
