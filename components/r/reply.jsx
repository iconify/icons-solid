import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pp2pmeb1q.css';

const viewBox = {"width":14,"height":16};
const content = `<path class="pp2pmeb1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:reply"} {...others} />);
}

export default Component;
