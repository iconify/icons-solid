import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/po8qfcb6i.css';
import '../../css/o/oe54axb1m.css';
import '../../css/a/afgy0eb3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="po8qfcb6i"/><path class="oe54axb1m"/><path class="afgy0eb3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:clock-twelve"} {...others} />);
}

export default Component;
