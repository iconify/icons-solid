import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uoh5rg3zj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uoh5rg3zj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:folder-video"} {...others} />);
}

export default Component;
