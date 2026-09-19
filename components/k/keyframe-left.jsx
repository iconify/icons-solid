import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a3z1eibjw.css';
import '../../css/u/uwu_9s3hm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="a3z1eibjw"/><path class="uwu_9s3hm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:keyframe-left"} {...others} />);
}

export default Component;
