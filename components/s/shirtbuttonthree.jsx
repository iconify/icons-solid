import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt-ujmo2s.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="rt-ujmo2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:shirtbuttonthree"} {...others} />);
}

export default Component;
