import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnr5p9b_q.css';

const viewBox = {"width":600,"height":600};
const content = `<path clip-rule="evenodd" class="qnr5p9b_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:codesandbox"} {...others} />);
}

export default Component;
