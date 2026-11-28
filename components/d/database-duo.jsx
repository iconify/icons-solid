import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cx-tykdha.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zofy89fep.css';
import '../../css/o/o-3uwz6hx.css';
import '../../css/f/fmqiscccf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cx-tykdha secondary"/><g class="dt0cm9dhy primary"><path class="zofy89fep"/><path class="o-3uwz6hx"/><path class="fmqiscccf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:database-duo"} {...others} />);
}

export default Component;
