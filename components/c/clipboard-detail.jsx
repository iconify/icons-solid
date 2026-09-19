import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lqbi2s1wa.css';
import '../../css/p/pa14hnb-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lqbi2s1wa"/><path class="pa14hnb-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:clipboard-detail"} {...others} />);
}

export default Component;
