import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgpqfv2kb.css';
import '../../css/p/pp7u04bjd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qgpqfv2kb"/><path class="pp7u04bjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:alarm-outline"} {...others} />);
}

export default Component;
