import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tnb770uwa.css';
import '../../css/v/veng4cbfr.css';
import '../../css/o/o4h8fkbnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tnb770uwa"/><path class="veng4cbfr"/><path class="o4h8fkbnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:milk"} {...others} />);
}

export default Component;
