import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpf2n7b-t.css';
import '../../css/v/vltu6acye.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jpf2n7b-t"/><path class="vltu6acye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:jar-20"} {...others} />);
}

export default Component;
