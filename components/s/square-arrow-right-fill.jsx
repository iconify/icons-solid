import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfry4lb_r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gfry4lb_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:square-arrow-right-fill"} {...others} />);
}

export default Component;
