import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/frx29rbpz.css';
import '../../css/c/ceukzxkbu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="frx29rbpz"/><path class="ceukzxkbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:personal-hygiene-hand-wipe-paper-1"} {...others} />);
}

export default Component;
