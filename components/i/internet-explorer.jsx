import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdd8rx4on.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gdd8rx4on"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:internet-explorer"} {...others} />);
}

export default Component;
