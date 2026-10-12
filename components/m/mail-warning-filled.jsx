import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yiwzlsbsz.css';
import '../../css/z/zz89phbve.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yiwzlsbsz"/><path class="zz89phbve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mail-warning-filled"} {...others} />);
}

export default Component;
