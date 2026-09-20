import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l90nn-83o.css';
import '../../css/f/fnxn1_jre.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l90nn-83o"/><path class="fnxn1_jre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:chrome-restore"} {...others} />);
}

export default Component;
