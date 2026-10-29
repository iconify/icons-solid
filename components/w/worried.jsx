import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x_b7gqbqv.css';
import '../../css/f/fye1ff7ya.css';
import '../../css/u/ulnr9lfjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="x_b7gqbqv"/><path class="fye1ff7ya wm-a"/><path class="ulnr9lfjv wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:worried"} {...others} />);
}

export default Component;
