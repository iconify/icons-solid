import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjh781b6k.css';

const viewBox = {"width":15,"height":24};
const content = `<path class="zjh781b6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:blood-drop"} {...others} />);
}

export default Component;
