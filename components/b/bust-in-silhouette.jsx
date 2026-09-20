import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s49utgb8k.css';
import '../../css/r/r9n-e6bgq.css';
import '../../css/e/emdzxdbjn.css';
import '../../css/h/h__2xvmcv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s49utgb8k"/><path class="r9n-e6bgq"/><path class="emdzxdbjn"/><path class="h__2xvmcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:bust-in-silhouette"} {...others} />);
}

export default Component;
