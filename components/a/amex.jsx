import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfo1k5b-e.css';
import '../../css/w/wku3mccqo.css';
import '../../css/t/tmnq0f59p.css';
import '../../css/q/qtouc3b8f.css';

const viewBox = {"width":16,"height":14};
const content = `<path class="sfo1k5b-e"/><path class="wku3mccqo"/><path class="tmnq0f59p"/><path class="qtouc3b8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:amex"} {...others} />);
}

export default Component;
