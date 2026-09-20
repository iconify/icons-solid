import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tteuwpbpv.css';
import '../../css/o/oyrwh--zq.css';
import '../../css/x/xa1mb6b3f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="tteuwpbpv"/><path class="oyrwh--zq"/><path class="xa1mb6b3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:bicycle-bike"} {...others} />);
}

export default Component;
