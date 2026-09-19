import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhhac4b9m.css';
import '../../css/a/a2-rokb1d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qhhac4b9m"/><path class="a2-rokb1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:arc"} {...others} />);
}

export default Component;
