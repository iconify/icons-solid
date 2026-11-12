import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0e7f5gtl.css';
import '../../css/w/wzq2d5gcq.css';
import '../../css/y/ygjyfvpzj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j0e7f5gtl"/><path class="wzq2d5gcq"/><path class="ygjyfvpzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:steamgriddb-light"} {...others} />);
}

export default Component;
