import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4y4hbm4d.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="f4y4hbm4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-turn-up-right-16-solid"} {...others} />);
}

export default Component;
