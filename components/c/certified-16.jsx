import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnb1mxbou.css';
import '../../css/q/qxw4ulbkx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qnb1mxbou"/><path clip-rule="evenodd" class="qxw4ulbkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:certified-16"} {...others} />);
}

export default Component;
