import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mv2or40zo.css';
import '../../css/w/wjkbjvb7n.css';
import '../../css/r/rlvl2kb3g.css';
import '../../css/v/v4jmbs15x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mv2or40zo"/><path class="wjkbjvb7n"/><path class="rlvl2kb3g"/><path class="v4jmbs15x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:image-file-star"} {...others} />);
}

export default Component;
