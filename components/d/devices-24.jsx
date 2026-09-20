import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ry2iipgfe.css';
import '../../css/p/p1xj-fcxh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ry2iipgfe"/><path class="p1xj-fcxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:devices-24"} {...others} />);
}

export default Component;
