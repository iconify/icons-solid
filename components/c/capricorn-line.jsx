import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/ql2n6wb7r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ql2n6wb7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:capricorn-line"} {...others} />);
}

export default Component;
