import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zb2a1qwds.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zb2a1qwds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:plane"} {...others} />);
}

export default Component;
