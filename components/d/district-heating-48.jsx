import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4lrodbjn.css';
import '../../css/s/s3ntjw07u.css';
import '../../css/p/pkgh68sab.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l4lrodbjn"/><path class="s3ntjw07u"/><path class="pkgh68sab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:district-heating-48"} {...others} />);
}

export default Component;
