import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnu9x_btz.css';
import '../../css/k/koyp8_atq.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="qnu9x_btz"/><path class="koyp8_atq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:integration-search"} {...others} />);
}

export default Component;
