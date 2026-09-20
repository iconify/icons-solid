import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9c8rcbdc.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="f9c8rcbdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:close-16"} {...others} />);
}

export default Component;
