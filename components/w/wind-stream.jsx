import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmwis782f.css';
import '../../css/j/j52z7pbtj.css';
import '../../css/c/chhmubb1r.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cmwis782f"/><path class="j52z7pbtj"/><path class="chhmubb1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:wind-stream"} {...others} />);
}

export default Component;
