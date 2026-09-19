import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxv6y6bpx.css';
import '../../css/k/kdqyt0wqb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mxv6y6bpx"/><path class="kdqyt0wqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:headphone-alt-2"} {...others} />);
}

export default Component;
