import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3dte_aui.css';
import '../../css/p/p51mxvbju.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e3dte_aui"/><path class="p51mxvbju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ctr"} {...others} />);
}

export default Component;
