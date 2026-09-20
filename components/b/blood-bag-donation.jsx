import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zlynffbnc.css';
import '../../css/g/g5ly26brs.css';
import '../../css/j/jii3o3xoc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zlynffbnc"/><path class="g5ly26brs"/><path class="jii3o3xoc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:blood-bag-donation"} {...others} />);
}

export default Component;
