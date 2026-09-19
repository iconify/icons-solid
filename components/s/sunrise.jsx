import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_q1obbrn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e_q1obbrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mono-icons:sunrise"} {...others} />);
}

export default Component;
