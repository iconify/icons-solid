import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nne87hv2x.css';
import '../../css/b/bfaiweb6l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nne87hv2x"/><path class="bfaiweb6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:monitor-code"} {...others} />);
}

export default Component;
