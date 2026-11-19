import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hhduiybjw.css';
import '../../css/f/fezn0l-if.css';
import '../../css/m/mq2euibef.css';
import '../../css/d/dfj84cc1p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hhduiybjw"/><path class="fezn0l-if"/><circle class="mq2euibef"/><path class="dfj84cc1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:box-settings"} {...others} />);
}

export default Component;
