import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/astg_0j2c.css';
import '../../css/x/xdjwa0f2b.css';
import '../../css/d/dag9y-zvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="astg_0j2c"/><path class="xdjwa0f2b"/><rect class="dag9y-zvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:between-horizontal-start"} {...others} />);
}

export default Component;
