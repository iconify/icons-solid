import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmc12mo1y.css';
import '../../css/g/g6nhfybzv.css';
import '../../css/c/cyo88nvfm.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="jmc12mo1y"/><path class="g6nhfybzv"/><path class="cyo88nvfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:male"} {...others} />);
}

export default Component;
