import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ezhtb1bvd.css';
import '../../css/z/zo29ocbol.css';
import '../../css/k/k1axlismq.css';
import '../../css/d/dzukk-jhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ezhtb1bvd"/><path class="zo29ocbol"/><path class="k1axlismq"/><path class="dzukk-jhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:equalizer-stereo-play"} {...others} />);
}

export default Component;
