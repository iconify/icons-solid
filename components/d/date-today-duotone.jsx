import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/be0ma7bmn.css';
import '../../css/k/ktzs39bmv.css';
import '../../css/x/x1wlzug7e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="be0ma7bmn"/><path class="ktzs39bmv"/><path class="x1wlzug7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:date-today-duotone"} {...others} />);
}

export default Component;
