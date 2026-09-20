import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j74h9q9lz.css';
import '../../css/h/hoi434opr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="j74h9q9lz"/><path class="hoi434opr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:play-list-8"} {...others} />);
}

export default Component;
