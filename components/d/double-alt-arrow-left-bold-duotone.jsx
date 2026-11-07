import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rb4o__b5r.css';
import '../../css/n/n2zpnybfq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rb4o__b5r"/><path clip-rule="evenodd" class="n2zpnybfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-left-bold-duotone"} {...others} />);
}

export default Component;
