import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c01x__lky.css';
import '../../css/e/eiiamhb2z.css';
import '../../css/v/v_r-dov2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c01x__lky"/><path class="eiiamhb2z"/><path class="v_r-dov2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:play-stream-line-duotone"} {...others} />);
}

export default Component;
