import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q_13nzbtl.css';
import '../../css/b/bu2_gqbdo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="q_13nzbtl"/><path class="bu2_gqbdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:play-circular"} {...others} />);
}

export default Component;
