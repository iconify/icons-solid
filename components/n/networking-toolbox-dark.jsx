import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j92q2kbdc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j92q2kbdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:networking-toolbox-dark"} {...others} />);
}

export default Component;
