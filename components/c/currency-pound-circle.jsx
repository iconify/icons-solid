import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wg61hig3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wg61hig3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:currency-pound-circle"} {...others} />);
}

export default Component;
