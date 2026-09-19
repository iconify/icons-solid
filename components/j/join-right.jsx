import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y87j-5jav.css';
import '../../css/q/qxxagsk8y.css';
import '../../css/j/j0jwr8ajm.css';
import '../../css/m/mheknxbpv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y87j-5jav"/><path class="qxxagsk8y"/><path class="j0jwr8ajm"/><path class="mheknxbpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:join-right"} {...others} />);
}

export default Component;
