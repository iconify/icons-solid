import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4gjp9e0a.css';
import '../../css/x/xho5iubuz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u4gjp9e0a"/><path class="xho5iubuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:user-x-20"} {...others} />);
}

export default Component;
