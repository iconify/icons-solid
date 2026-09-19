import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqu95vijs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oqu95vijs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:sliding-window-door-close"} {...others} />);
}

export default Component;
