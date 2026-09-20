import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntoj3hb7n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ntoj3hb7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:alert-circle-filled"} {...others} />);
}

export default Component;
