import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zz73jkslc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zz73jkslc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:virus-off"} {...others} />);
}

export default Component;
