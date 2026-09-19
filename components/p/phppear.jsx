import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9r0b5yyt.css';

const viewBox = {"width":1025,"height":1025};
const content = `<path class="o9r0b5yyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:phppear"} {...others} />);
}

export default Component;
