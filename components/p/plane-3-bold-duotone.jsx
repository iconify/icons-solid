import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_ruqrb_t.css';
import '../../css/i/iyp-m0sxr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b_ruqrb_t"/><path class="iyp-m0sxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plane-3-bold-duotone"} {...others} />);
}

export default Component;
