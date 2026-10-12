import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/du1wh4bdg.css';
import '../../css/s/s26wu4bzo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="du1wh4bdg"/><path class="s26wu4bzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-round-arrow-left-filled"} {...others} />);
}

export default Component;
