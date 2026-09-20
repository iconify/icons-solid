import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/emrjjuzor.css';
import '../../css/b/bcrcl3pcu.css';
import '../../css/o/oiemdrb8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="emrjjuzor"/><path class="bcrcl3pcu"/><path class="oiemdrb8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:globe-light"} {...others} />);
}

export default Component;
