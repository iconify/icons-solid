import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9wu4-b8f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z9wu4-b8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:group-objects"} {...others} />);
}

export default Component;
