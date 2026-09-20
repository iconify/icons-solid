import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/c/c_frgob_s.css';
import '../../css/k/kcr9dtbpb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="c_frgob_s"/><path class="kcr9dtbpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:paint-bucket"} {...others} />);
}

export default Component;
