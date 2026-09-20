import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cxmgx1b1q.css';
import '../../css/u/uhmn79b9g.css';
import '../../css/t/t7ohwjbde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cxmgx1b1q"/><path class="uhmn79b9g"/><path class="t7ohwjbde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:device-message"} {...others} />);
}

export default Component;
