import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vj7aiv6ea.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vj7aiv6ea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:taj-mahal-line"} {...others} />);
}

export default Component;
