import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cgm86oegm.css';
import '../../css/f/f629m7bdx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="cgm86oegm"/><path class="f629m7bdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:number-5-square-thin"} {...others} />);
}

export default Component;
