import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsu2-fabk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dsu2-fabk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:campfire-fill"} {...others} />);
}

export default Component;
