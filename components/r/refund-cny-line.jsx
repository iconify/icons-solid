import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3qp9_dtt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n3qp9_dtt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:refund-cny-line"} {...others} />);
}

export default Component;
