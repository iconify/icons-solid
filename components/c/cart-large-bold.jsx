import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bw53xhb4q.css';
import '../../css/s/s0u7hix8w.css';
import '../../css/r/rg3j4qb_y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bw53xhb4q"/><path class="s0u7hix8w"/><path class="rg3j4qb_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-large-bold"} {...others} />);
}

export default Component;
