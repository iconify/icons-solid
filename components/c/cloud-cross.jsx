import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/q/qm5hnkttd.css';
import '../../css/s/s210hs_8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="qm5hnkttd"/><path class="s210hs_8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cloud-cross"} {...others} />);
}

export default Component;
