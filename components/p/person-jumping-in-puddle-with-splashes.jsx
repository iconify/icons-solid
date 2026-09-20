import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-nu6kbzo.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="v-nu6kbzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-jumping-in-puddle-with-splashes"} {...others} />);
}

export default Component;
