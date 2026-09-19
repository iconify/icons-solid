import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0txjs4ux.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l0txjs4ux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:logout"} {...others} />);
}

export default Component;
