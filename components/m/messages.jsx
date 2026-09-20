import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yryg7ib-v.css';
import '../../css/b/bfn9owb0u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yryg7ib-v"/><path class="bfn9owb0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:messages"} {...others} />);
}

export default Component;
