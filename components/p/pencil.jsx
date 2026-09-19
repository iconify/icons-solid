import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsvs-7g4k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qsvs-7g4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:pencil"} {...others} />);
}

export default Component;
