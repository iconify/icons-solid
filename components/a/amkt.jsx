import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tfi7w5aob.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tfi7w5aob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:amkt"} {...others} />);
}

export default Component;
