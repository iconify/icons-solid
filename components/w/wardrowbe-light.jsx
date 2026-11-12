import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_ihf0bwu.css';
import '../../css/t/t1xci_blt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j_ihf0bwu"/><path class="t1xci_blt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wardrowbe-light"} {...others} />);
}

export default Component;
