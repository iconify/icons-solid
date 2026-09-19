import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zv4yel-fv.css';

const viewBox = {"width":224,"height":472};
const content = `<path class="zv4yel-fv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:previous"} {...others} />);
}

export default Component;
