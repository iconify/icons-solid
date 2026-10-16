import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gt8s04bmo.css';
import '../../css/d/dce751b7x.css';
import '../../css/z/zi5ucf-wc.css';
import '../../css/s/sci8kxxjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gt8s04bmo"/><circle class="dce751b7x"/><circle class="zi5ucf-wc"/><path class="sci8kxxjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:kick-scooter"} {...others} />);
}

export default Component;
