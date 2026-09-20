import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk_1fybkb.css';
import '../../css/h/hc5l59cwp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lk_1fybkb"/><path class="hc5l59cwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:codespaces-24"} {...others} />);
}

export default Component;
