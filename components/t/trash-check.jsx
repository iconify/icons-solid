import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sgrts9b0u.css';
import '../../css/i/in3ko8b4i.css';
import '../../css/v/vuu5r_dhp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sgrts9b0u"/><path class="in3ko8b4i"/><path class="vuu5r_dhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:trash-check"} {...others} />);
}

export default Component;
