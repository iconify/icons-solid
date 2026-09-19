import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lkliae68h.css';
import '../../css/c/ck_on5t5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lkliae68h"/><path class="ck_on5t5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:doc-star-in"} {...others} />);
}

export default Component;
