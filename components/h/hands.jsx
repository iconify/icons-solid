import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlpmhkb0y.css';
import '../../css/a/arjp9mitp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mlpmhkb0y"/><path class="arjp9mitp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:hands"} {...others} />);
}

export default Component;
