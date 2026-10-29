import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/frpfn66gu.css';
import '../../css/m/me6kme-gu.css';
import '../../css/o/o2vm0kbuj.css';
import '../../css/g/gbftiw4sm.css';
import '../../css/e/eo-5y3hth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="frpfn66gu"/><path class="me6kme-gu"/><path class="o2vm0kbuj wm-a"/><path class="gbftiw4sm"/><path class="eo-5y3hth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:projector-duo"} {...others} />);
}

export default Component;
