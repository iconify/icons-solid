import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9qqxib9s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z9qqxib9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ko-fi-dark"} {...others} />);
}

export default Component;
