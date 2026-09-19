import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh5ca-63n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rh5ca-63n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-big-up-line-filled"} {...others} />);
}

export default Component;
