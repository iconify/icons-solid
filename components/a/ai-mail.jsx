import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w6b3lzbgx.css';
import '../../css/s/sr_zc7bwn.css';
import '../../css/d/dd5nscbtu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w6b3lzbgx"/><path class="sr_zc7bwn"/><path class="dd5nscbtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-mail"} {...others} />);
}

export default Component;
