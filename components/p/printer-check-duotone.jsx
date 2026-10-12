import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qv-63pbce.css';
import '../../css/y/y-oiv4box.css';
import '../../css/h/hnbud8kdw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qv-63pbce"/><path class="y-oiv4box"/><path class="hnbud8kdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:printer-check-duotone"} {...others} />);
}

export default Component;
