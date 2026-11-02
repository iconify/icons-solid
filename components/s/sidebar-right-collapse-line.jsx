import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t71lnfbfx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t71lnfbfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:sidebar-right-collapse-line"} {...others} />);
}

export default Component;
