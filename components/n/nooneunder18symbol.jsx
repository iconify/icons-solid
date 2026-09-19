import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ot8rfwb8w.css';
import '../../css/a/a23i8nphm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ot8rfwb8w"/><path class="a23i8nphm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:nooneunder18symbol"} {...others} />);
}

export default Component;
