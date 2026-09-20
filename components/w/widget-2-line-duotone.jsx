import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b4zutccum.css';
import '../../css/y/y681t8b5u.css';
import '../../css/l/lk2buz33l.css';
import '../../css/j/jztu-pbxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="b4zutccum"/><path class="y681t8b5u"/><path class="lk2buz33l"/><path class="jztu-pbxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-2-line-duotone"} {...others} />);
}

export default Component;
