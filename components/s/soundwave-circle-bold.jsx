import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jt7g0ubvh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jt7g0ubvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:soundwave-circle-bold"} {...others} />);
}

export default Component;
