import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf5_y917j.css';
import '../../css/u/ub1z-yb9r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yf5_y917j"/><path class="ub1z-yb9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:lock-open-alt"} {...others} />);
}

export default Component;
