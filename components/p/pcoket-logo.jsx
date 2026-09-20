import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j5235tb5v.css';
import '../../css/m/mmmzb9-dt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j5235tb5v"/><path class="mmmzb9-dt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:pcoket-logo"} {...others} />);
}

export default Component;
