import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9hw7ehsm.css';
import '../../css/g/g9h7rdbkj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i9hw7ehsm"/><path class="g9h7rdbkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:link"} {...others} />);
}

export default Component;
