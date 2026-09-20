import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/we9u1gzwf.css';
import '../../css/j/jf-7ccbdc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="we9u1gzwf"/><path class="jf-7ccbdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:octelium"} {...others} />);
}

export default Component;
