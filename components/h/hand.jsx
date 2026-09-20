import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v6f07cc4u.css';
import '../../css/f/fj-ipp45f.css';
import '../../css/g/gqos64b9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v6f07cc4u"/><path class="fj-ipp45f"/><path class="gqos64b9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:hand"} {...others} />);
}

export default Component;
