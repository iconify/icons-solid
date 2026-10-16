import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wt6bg53-l.css';
import '../../css/x/xc-gyrbwo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wt6bg53-l"/><path class="xc-gyrbwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:extension-lead-48-bold"} {...others} />);
}

export default Component;
