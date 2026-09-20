import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_oyv7tku.css';
import '../../css/m/m36y1-ioy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g_oyv7tku"/><path class="m36y1-ioy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:codeberg-dark"} {...others} />);
}

export default Component;
