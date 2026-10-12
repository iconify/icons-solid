import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v6ua404vp.css';
import '../../css/n/njvh1v2-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="v6ua404vp"/><path class="njvh1v2-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:at"} {...others} />);
}

export default Component;
