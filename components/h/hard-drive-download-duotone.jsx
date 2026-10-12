import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aly3ipb5i.css';
import '../../css/o/oly-m626v.css';
import '../../css/q/qt56rzevo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="aly3ipb5i"/><path class="oly-m626v"/><path class="qt56rzevo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hard-drive-download-duotone"} {...others} />);
}

export default Component;
