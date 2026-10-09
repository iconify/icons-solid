import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jk9klbblz.css';
import '../../css/j/j8rsm4b8k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jk9klbblz"/><path class="j8rsm4b8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:inbox-20"} {...others} />);
}

export default Component;
