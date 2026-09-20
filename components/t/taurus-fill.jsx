import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqo7qpbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fqo7qpbvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:taurus-fill"} {...others} />);
}

export default Component;
