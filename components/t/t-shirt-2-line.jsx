import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cx0wgg53h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cx0wgg53h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:t-shirt-2-line"} {...others} />);
}

export default Component;
