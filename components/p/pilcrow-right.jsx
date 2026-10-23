import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yp6mnbcdm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yp6mnbcdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:pilcrow-right"} {...others} />);
}

export default Component;
