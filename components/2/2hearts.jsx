import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q79rvz6zn.css';
import '../../css/r/rv25bpjtc.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="q79rvz6zn"/><path class="rv25bpjtc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:2hearts"} {...others} />);
}

export default Component;
