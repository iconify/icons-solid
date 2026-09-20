import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_ulcowzu.css';
import '../../css/e/en0k_qb_n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f_ulcowzu"/><path class="en0k_qb_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:youtube-square"} {...others} />);
}

export default Component;
