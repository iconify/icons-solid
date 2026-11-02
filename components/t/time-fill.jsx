import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3k2p-2sv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g3k2p-2sv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:time-fill"} {...others} />);
}

export default Component;
