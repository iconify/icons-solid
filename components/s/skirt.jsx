import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jee5y5ssn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jee5y5ssn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:skirt"} {...others} />);
}

export default Component;
