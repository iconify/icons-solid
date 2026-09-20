import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncxf18bye.css';
import '../../css/l/ld7aedbfu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ncxf18bye"/><path class="ld7aedbfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ansible"} {...others} />);
}

export default Component;
