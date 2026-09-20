import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ge482kbss.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ge482kbss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:alert-circle"} {...others} />);
}

export default Component;
