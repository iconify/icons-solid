import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1omeib4c.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="y1omeib4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:treasure-chest-remix"} {...others} />);
}

export default Component;
