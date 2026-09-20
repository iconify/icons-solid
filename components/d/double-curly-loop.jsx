import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a64e_yb6y.css';
import '../../css/u/uygqtsbxn.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="a64e_yb6y"/><path class="uygqtsbxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:double-curly-loop"} {...others} />);
}

export default Component;
