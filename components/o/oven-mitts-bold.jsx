import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vipk1m54q.css';
import '../../css/l/lbzbb7bkq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vipk1m54q"/><path class="lbzbb7bkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:oven-mitts-bold"} {...others} />);
}

export default Component;
