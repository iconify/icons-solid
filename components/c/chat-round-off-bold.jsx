import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghj3bdbyn.css';
import '../../css/s/sibe-iawq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ghj3bdbyn"/><path class="sibe-iawq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-off-bold"} {...others} />);
}

export default Component;
