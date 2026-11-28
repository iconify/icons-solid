import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5vr4bbia.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hqm2qbcec.css';
import '../../css/j/jjvyhvb4o.css';
import '../../css/b/botn2_sad.css';
import '../../css/z/zhdj_yccb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary w5vr4bbia"/><g class="dt0cm9dhy primary"><path class="hqm2qbcec"/><path class="jjvyhvb4o"/><path class="botn2_sad"/><path class="zhdj_yccb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:share-duo"} {...others} />);
}

export default Component;
