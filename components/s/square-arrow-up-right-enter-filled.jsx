import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-hof9sdl.css';
import '../../css/z/zz5fjmirl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h-hof9sdl"/><path class="zz5fjmirl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-arrow-up-right-enter-filled"} {...others} />);
}

export default Component;
