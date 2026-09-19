import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s43y9hb-k.css';
import '../../css/w/wqz8cobop.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s43y9hb-k"/><path class="wqz8cobop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-detail"} {...others} />);
}

export default Component;
