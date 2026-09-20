import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/q/qm5hnkttd.css';
import '../../css/w/w_sy87bxv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="qm5hnkttd"/><path class="w_sy87bxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cloud-plus3"} {...others} />);
}

export default Component;
