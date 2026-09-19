import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2nc1hxeq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e2nc1hxeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:xpeng"} {...others} />);
}

export default Component;
