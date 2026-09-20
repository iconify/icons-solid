import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/skd7wqbfp.css';
import '../../css/d/drqyc4lxk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="skd7wqbfp"/><path class="drqyc4lxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:school-bus-side"} {...others} />);
}

export default Component;
