import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_lwbwbqm.css';
import '../../css/y/yjop_6tvw.css';
import '../../css/m/mpyvfyfzq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j_lwbwbqm"/><path class="yjop_6tvw"/><path class="mpyvfyfzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:walkman-headphones-bold"} {...others} />);
}

export default Component;
