import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0dj8vbix.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="r0dj8vbix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tattoo-machine"} {...others} />);
}

export default Component;
