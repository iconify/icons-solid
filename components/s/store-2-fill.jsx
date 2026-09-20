import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7-p5eb0s.css';
import '../../css/e/e2w581g2m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s7-p5eb0s"/><path class="e2w581g2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:store-2-fill"} {...others} />);
}

export default Component;
