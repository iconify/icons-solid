import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qakvv0b7s.css';
import '../../css/j/jse0vkp7i.css';
import '../../css/j/j3rs6kqlz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qakvv0b7s"/><path clip-rule="evenodd" class="jse0vkp7i"/><path class="j3rs6kqlz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:qash"} {...others} />);
}

export default Component;
