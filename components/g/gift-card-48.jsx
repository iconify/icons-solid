import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zq88i7qnu.css';
import '../../css/u/u4a6gjv0o.css';
import '../../css/q/qgqlwsbbr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zq88i7qnu"/><path class="u4a6gjv0o"/><path class="qgqlwsbbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gift-card-48"} {...others} />);
}

export default Component;
