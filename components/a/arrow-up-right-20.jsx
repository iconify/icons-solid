import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7q9a2bck.css';
import '../../css/v/vzivax-kb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f7q9a2bck"/><path class="vzivax-kb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-up-right-20"} {...others} />);
}

export default Component;
