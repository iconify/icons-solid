import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu28debah.css';
import '../../css/d/divqy_2wh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mu28debah"/><path class="divqy_2wh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:clipboard-pen-line-filled"} {...others} />);
}

export default Component;
