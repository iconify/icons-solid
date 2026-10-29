import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t8duj-sdt.css';
import '../../css/g/gybudlb5c.css';
import '../../css/u/ulnr9lfjv.css';
import '../../css/x/x_b7gqbqv.css';
import '../../css/f/fye1ff7ya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="t8duj-sdt"/><path class="gybudlb5c wm-s"/><path class="ulnr9lfjv wm-s"/><path class="x_b7gqbqv"/><path class="fye1ff7ya wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:worried-duo"} {...others} />);
}

export default Component;
