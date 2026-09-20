import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwlc1fzvq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mwlc1fzvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:flag-bitcoin"} {...others} />);
}

export default Component;
