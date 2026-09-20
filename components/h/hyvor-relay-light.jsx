import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdvvlcb5x.css';
import '../../css/s/s6i82o90q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wdvvlcb5x"/><path class="s6i82o90q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hyvor-relay-light"} {...others} />);
}

export default Component;
