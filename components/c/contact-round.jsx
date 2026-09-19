import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e7ugy10kt.css';
import '../../css/g/gp72obe2t.css';
import '../../css/l/lcts5dtqa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e7ugy10kt"/><path class="gp72obe2t"/><path class="lcts5dtqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:contact-round"} {...others} />);
}

export default Component;
