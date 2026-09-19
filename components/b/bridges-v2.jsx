import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3k-2m9tb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k3k-2m9tb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:bridges-v2"} {...others} />);
}

export default Component;
