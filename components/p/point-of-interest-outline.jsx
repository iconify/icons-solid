import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvpsj6bfj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jvpsj6bfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:point-of-interest-outline"} {...others} />);
}

export default Component;
