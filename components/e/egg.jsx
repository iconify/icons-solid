import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_2t8xb6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e_2t8xb6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:egg"} {...others} />);
}

export default Component;
