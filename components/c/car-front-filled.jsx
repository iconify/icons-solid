import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qe3n-sdlk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qe3n-sdlk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:car-front-filled"} {...others} />);
}

export default Component;
