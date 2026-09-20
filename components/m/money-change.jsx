import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/c/cgr1x68jz.css';
import '../../css/t/thwmd5b0c.css';
import '../../css/k/kh50enb1g.css';
import '../../css/e/ekm4kebms.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="cgr1x68jz"/><path class="thwmd5b0c"/><path class="kh50enb1g"/><path class="ekm4kebms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:money-change"} {...others} />);
}

export default Component;
