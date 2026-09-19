import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wckr9kb1z.css';
import '../../css/j/jzowd3bfo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wckr9kb1z"/><path class="jzowd3bfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:plus-circle-outline"} {...others} />);
}

export default Component;
