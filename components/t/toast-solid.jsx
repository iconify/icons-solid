import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4m87fb-g.css';
import '../../css/v/vmlbxu0qg.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="j4m87fb-g"/><path clip-rule="evenodd" class="vmlbxu0qg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:toast-solid"} {...others} />);
}

export default Component;
