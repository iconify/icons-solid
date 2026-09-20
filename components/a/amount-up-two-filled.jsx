import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zj166yu5q.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="zj166yu5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:amount-up-two-filled"} {...others} />);
}

export default Component;
