import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g4a5ve-ee.css';
import '../../css/x/xoeulgbfv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g4a5ve-ee"/><path class="xoeulgbfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:octagon-check"} {...others} />);
}

export default Component;
