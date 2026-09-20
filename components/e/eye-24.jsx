import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvmpzpbvf.css';
import '../../css/v/vqmwm_bhv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pvmpzpbvf"/><path class="vqmwm_bhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:eye-24"} {...others} />);
}

export default Component;
