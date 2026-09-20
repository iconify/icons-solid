import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y39xv8bno.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="y39xv8bno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:star-and-crescent-on-square"} {...others} />);
}

export default Component;
