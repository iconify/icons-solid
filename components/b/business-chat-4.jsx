import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w34osu__y.css';
import '../../css/i/iubmt2b7z.css';
import '../../css/g/g-8h4-gfz.css';
import '../../css/t/tsye42sqw.css';
import '../../css/a/awcpsv2bc.css';
import '../../css/n/nfp7-6_0n.css';
import '../../css/d/datc7nbwn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="w34osu__y"><path class="iubmt2b7z"/><path class="g-8h4-gfz"/><path class="tsye42sqw"/><path class="awcpsv2bc"/><path class="nfp7-6_0n"/><path class="datc7nbwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:business-chat-4"} {...others} />);
}

export default Component;
