import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-hof9sdl.css';
import '../../css/r/rp-2d-muk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h-hof9sdl"/><path class="rp-2d-muk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-arrow-up-right-enter-filled"} {...others} />);
}

export default Component;
