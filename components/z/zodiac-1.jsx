import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/v/vp_sfccwb.css';
import '../../css/k/k-v5flb4u.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="vp_sfccwb"/><path class="k-v5flb4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:zodiac-1"} {...others} />);
}

export default Component;
