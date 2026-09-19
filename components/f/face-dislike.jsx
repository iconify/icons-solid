import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyj3y8b_q.css';

const viewBox = {"width":1664,"height":1664};
const content = `<path class="kyj3y8b_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:face-dislike"} {...others} />);
}

export default Component;
