import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7hr3-2pu.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="h7hr3-2pu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:star-16-solid"} {...others} />);
}

export default Component;
