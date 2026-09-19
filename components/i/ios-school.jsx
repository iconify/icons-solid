import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obc9sh-4y.css';
import '../../css/j/jm-104bqg.css';
import '../../css/f/frztjqr5l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="obc9sh-4y"/><path class="jm-104bqg"/><path class="frztjqr5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-school"} {...others} />);
}

export default Component;
