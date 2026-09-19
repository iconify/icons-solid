import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clcn2dq2d.css';

const viewBox = {"width":1550,"height":1000};
const content = `<path class="clcn2dq2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:reply-all"} {...others} />);
}

export default Component;
