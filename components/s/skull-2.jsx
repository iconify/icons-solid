import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g2h_fsbyf.css';
import '../../css/u/u57g-w_pq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="g2h_fsbyf"/><path class="u57g-w_pq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:skull-2"} {...others} />);
}

export default Component;
