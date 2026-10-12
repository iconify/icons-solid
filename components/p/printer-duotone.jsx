import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hnbud8kdw.css';
import '../../css/o/olsqdun8e.css';
import '../../css/y/yl8pc3bzh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hnbud8kdw"/><path class="olsqdun8e"/><path class="yl8pc3bzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:printer-duotone"} {...others} />);
}

export default Component;
