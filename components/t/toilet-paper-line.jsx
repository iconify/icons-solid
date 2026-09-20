import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bobuj8b3z.css';
import '../../css/n/nh6el8bqh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bobuj8b3z"/><ellipse class="nh6el8bqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:toilet-paper-line"} {...others} />);
}

export default Component;
