import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xd-si8bfj.css';
import '../../css/z/zn8lzqb4y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xd-si8bfj"/><path class="zn8lzqb4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rwmarkable"} {...others} />);
}

export default Component;
