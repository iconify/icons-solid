import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0dqwhbgb.css';
import '../../css/j/jzyuqzbyu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q0dqwhbgb"/><path class="jzyuqzbyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-woman"} {...others} />);
}

export default Component;
