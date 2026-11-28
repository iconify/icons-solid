import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4s9j0-ru.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b00ennbgq.css';
import '../../css/o/otnhmebbb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p4s9j0-ru secondary"/><g class="dt0cm9dhy primary"><path class="b00ennbgq"/><path class="otnhmebbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:hexagon-full-duo"} {...others} />);
}

export default Component;
