import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzzl3ybmf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/iv8z1eyqm.css';
import '../../css/f/fg2wsdb7a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kzzl3ybmf secondary"/><g class="dt0cm9dhy primary"><path class="iv8z1eyqm"/><path class="fg2wsdb7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cupcake-duo"} {...others} />);
}

export default Component;
