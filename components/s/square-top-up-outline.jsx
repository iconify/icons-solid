import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rszymacgm.css';
import '../../css/m/m31n_gbkv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rszymacgm"/><path class="m31n_gbkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-top-up-outline"} {...others} />);
}

export default Component;
