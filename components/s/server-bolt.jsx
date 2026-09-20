import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0lg2ebmq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r0lg2ebmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:server-bolt"} {...others} />);
}

export default Component;
