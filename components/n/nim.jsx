import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5bnq-jir.css';
import '../../css/j/j1uc_7b3b.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="l5bnq-jir"/><path class="j1uc_7b3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:nim"} {...others} />);
}

export default Component;
