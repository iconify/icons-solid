import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_m0xwdts.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l_m0xwdts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:betula-bottom-right-horizontal-line"} {...others} />);
}

export default Component;
