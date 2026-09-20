import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsq76_m7h.css';
import '../../css/g/ge4x6hrjx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dsq76_m7h"/><path class="ge4x6hrjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:rss-feed-bold"} {...others} />);
}

export default Component;
