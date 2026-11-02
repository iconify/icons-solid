import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ko5dwac9v.css';
import '../../css/q/q_5fvp18n.css';
import '../../css/q/qua1n-5tb.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ko5dwac9v"/><path class="q_5fvp18n"/><path class="qua1n-5tb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:vlang"} {...others} />);
}

export default Component;
