import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kfqth0sjx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kfqth0sjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:flip-horizontal-circle-1"} {...others} />);
}

export default Component;
