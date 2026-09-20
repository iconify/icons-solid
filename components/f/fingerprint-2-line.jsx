import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e48hl62yw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e48hl62yw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:fingerprint-2-line"} {...others} />);
}

export default Component;
