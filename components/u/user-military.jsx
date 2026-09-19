import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ikuckebwq.css';
import '../../css/r/r1o9g9byu.css';
import '../../css/g/gad0czbfs.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ikuckebwq"/><path class="r1o9g9byu"/><path class="gad0czbfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:user-military"} {...others} />);
}

export default Component;
