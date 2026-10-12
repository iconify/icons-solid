import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8-_5gdxh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u8-_5gdxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ellipse-filled"} {...others} />);
}

export default Component;
