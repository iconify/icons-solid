import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rszqa-p5t.css';
import '../../css/n/n8-3fdb7j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rszqa-p5t"/><path class="n8-3fdb7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:door-closed"} {...others} />);
}

export default Component;
