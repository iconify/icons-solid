import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xj_ymgb-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xj_ymgb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:circle-arrow-out-down-left-line"} {...others} />);
}

export default Component;
