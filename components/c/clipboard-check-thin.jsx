import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hlzb69b_q.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="hlzb69b_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:clipboard-check-thin"} {...others} />);
}

export default Component;
