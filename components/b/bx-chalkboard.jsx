import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iey856b5w.css';
import '../../css/a/aelxiub-n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iey856b5w"/><path class="aelxiub-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-chalkboard"} {...others} />);
}

export default Component;
