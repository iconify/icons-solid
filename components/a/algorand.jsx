import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucv0ic1km.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ucv0ic1km"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:algorand"} {...others} />);
}

export default Component;
