import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2qb3-bqo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p2qb3-bqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:cylinder-2-line"} {...others} />);
}

export default Component;
