import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/k/k8gjbsf_l.css';
import '../../css/g/g-o3-og7h.css';
import '../../css/v/vg5qdnbut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="k8gjbsf_l"/><path class="g-o3-og7h"/><path class="vg5qdnbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:pingchat-logo"} {...others} />);
}

export default Component;
