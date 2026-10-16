import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2linuthc.css';
import '../../css/p/p4elc_bfg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p2linuthc"/><path class="p4elc_bfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:address-book-20-bold"} {...others} />);
}

export default Component;
