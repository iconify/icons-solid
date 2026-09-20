import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ku0o0cc0w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ku0o0cc0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:bath-shower-line"} {...others} />);
}

export default Component;
