import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft30jne3t.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="ft30jne3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:deletealarm"} {...others} />);
}

export default Component;
