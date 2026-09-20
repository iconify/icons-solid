import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s_cah8bvq.css';
import '../../css/r/rq828qbtd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s_cah8bvq"/><path class="rq828qbtd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:convert"} {...others} />);
}

export default Component;
