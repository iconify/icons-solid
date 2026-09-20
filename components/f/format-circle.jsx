import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n6_fz1w1f.css';
import '../../css/b/b-lgj1bzh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n6_fz1w1f"/><path class="b-lgj1bzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:format-circle"} {...others} />);
}

export default Component;
