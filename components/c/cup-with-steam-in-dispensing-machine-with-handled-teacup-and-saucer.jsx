import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vztls8b-b.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vztls8b-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:cup-with-steam-in-dispensing-machine-with-handled-teacup-and-saucer"} {...others} />);
}

export default Component;
