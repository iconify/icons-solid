import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lebas9t0i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lebas9t0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:qnap-rtorrent-pro"} {...others} />);
}

export default Component;
