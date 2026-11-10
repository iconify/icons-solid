import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wxiu-kttg.css';
import '../../css/s/s3iryr3kc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="wxiu-kttg"/><path class="s3iryr3kc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:theta-capital"} {...others} />);
}

export default Component;
