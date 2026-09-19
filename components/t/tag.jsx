import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccub-obgi.css';
import '../../css/z/zbv5-bbgx.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="ccub-obgi"/><path class="zbv5-bbgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:tag"} {...others} />);
}

export default Component;
