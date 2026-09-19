import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hf1ii2b4o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hf1ii2b4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:water-drop-alt-filled"} {...others} />);
}

export default Component;
