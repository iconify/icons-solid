import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyo0a_ipl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lyo0a_ipl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:grid-2x2-solid"} {...others} />);
}

export default Component;
