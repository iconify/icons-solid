import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntkb4qi-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ntkb4qi-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:close-square-fill"} {...others} />);
}

export default Component;
