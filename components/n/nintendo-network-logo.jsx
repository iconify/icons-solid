import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/u/up1fh7bkb.css';
import '../../css/q/q8z29yb9o.css';
import '../../css/a/avfi11eud.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="up1fh7bkb"/><path class="q8z29yb9o"/><path class="avfi11eud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:nintendo-network-logo"} {...others} />);
}

export default Component;
