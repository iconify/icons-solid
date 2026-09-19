import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5tqbubdt.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="h5tqbubdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:bars-4-16-solid"} {...others} />);
}

export default Component;
