import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m93uw9bmq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m93uw9bmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:x-circle-fill-24"} {...others} />);
}

export default Component;
