import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg5wexjad.css';
import '../../css/g/g806ztb6s.css';
import '../../css/y/ytqo-vbjd.css';
import '../../css/e/e-6w53grg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vg5wexjad"/><path class="g806ztb6s"/><path class="ytqo-vbjd"/><path class="e-6w53grg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:balloon"} {...others} />);
}

export default Component;
