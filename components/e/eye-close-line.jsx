import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjmgc7bxf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vjmgc7bxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:eye-close-line"} {...others} />);
}

export default Component;
