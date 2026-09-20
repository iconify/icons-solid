import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgbx9bfba.css';
import '../../css/l/l1tfhcbvb.css';
import '../../css/f/f6kx-ccba.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jgbx9bfba"/><path class="l1tfhcbvb"/><path class="f6kx-ccba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:you"} {...others} />);
}

export default Component;
