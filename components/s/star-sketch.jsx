import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xs4al_e6r.css';
import '../../css/v/vj3558bmh.css';
import '../../css/j/jdwknqbob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="xs4al_e6r"/><path class="vj3558bmh"/><path class="jdwknqbob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:star-sketch"} {...others} />);
}

export default Component;
