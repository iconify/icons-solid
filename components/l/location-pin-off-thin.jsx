import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/o/oc0vi5bvd.css';
import '../../css/y/y-h7hdc4i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="oc0vi5bvd"/><path class="y-h7hdc4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:location-pin-off-thin"} {...others} />);
}

export default Component;
