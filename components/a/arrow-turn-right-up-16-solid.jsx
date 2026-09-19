import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rz778umpv.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="rz778umpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-turn-right-up-16-solid"} {...others} />);
}

export default Component;
