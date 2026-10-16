import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncwlnq5lf.css';
import '../../css/i/it1p7fg9r.css';
import '../../css/x/xqp68wtip.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ncwlnq5lf"/><path class="it1p7fg9r"/><path class="xqp68wtip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:school-bus-48"} {...others} />);
}

export default Component;
