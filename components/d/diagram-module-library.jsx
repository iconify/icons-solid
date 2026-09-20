import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jg1m7vbhr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jg1m7vbhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:diagram-module-library"} {...others} />);
}

export default Component;
