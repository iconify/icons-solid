import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/t/t_4na0bwt.css';
import '../../css/q/qo4n9sbwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="t_4na0bwt"/><path class="qo4n9sbwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:message-programming"} {...others} />);
}

export default Component;
