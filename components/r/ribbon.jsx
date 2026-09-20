import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bfnhaupzo.css';
import '../../css/i/im33hrbid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bfnhaupzo"/><path class="im33hrbid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:ribbon"} {...others} />);
}

export default Component;
