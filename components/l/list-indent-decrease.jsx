import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp3y-jbcu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fp3y-jbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:list-indent-decrease"} {...others} />);
}

export default Component;
