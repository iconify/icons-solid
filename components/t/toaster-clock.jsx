import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yr4-q2btz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yr4-q2btz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:toaster-clock"} {...others} />);
}

export default Component;
