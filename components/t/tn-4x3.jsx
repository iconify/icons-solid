import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-p6sxs_x.css';
import '../../css/i/ibd8u0c8f.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="m-p6sxs_x"/><path class="ibd8u0c8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:tn-4x3"} {...others} />);
}

export default Component;
