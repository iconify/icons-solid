import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy6m6hb8z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gy6m6hb8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:lift-out-window-close"} {...others} />);
}

export default Component;
