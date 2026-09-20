import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nu9qhkbjj.css';
import '../../css/b/b1x25lb6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nu9qhkbjj"/><path class="b1x25lb6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:printer"} {...others} />);
}

export default Component;
