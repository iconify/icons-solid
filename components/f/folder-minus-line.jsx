import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zt-x7st9o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zt-x7st9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:folder-minus-line"} {...others} />);
}

export default Component;
