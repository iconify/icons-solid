import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iu_x1-bzu.css';
import '../../css/y/ys_vvx_-d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iu_x1-bzu"/><path class="ys_vvx_-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:okd"} {...others} />);
}

export default Component;
