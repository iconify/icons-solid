import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlmnb0b7u.css';

const viewBox = {"width":1024,"height":1025};
const content = `<path class="vlmnb0b7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:preview"} {...others} />);
}

export default Component;
