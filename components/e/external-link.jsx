import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e1f7-bc3e.css';
import '../../css/q/qf2khhs5k.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="e1f7-bc3e"/><path class="qf2khhs5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:external-link"} {...others} />);
}

export default Component;
