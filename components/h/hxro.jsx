import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/alirshb7s.css';
import '../../css/a/asovtkbqw.css';
import '../../css/s/szpj5_vjj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="alirshb7s"/><path class="asovtkbqw"/><path class="szpj5_vjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hxro"} {...others} />);
}

export default Component;
