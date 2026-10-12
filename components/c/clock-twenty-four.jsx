import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i4fdwq57p.css';
import '../../css/o/oe54axb1m.css';
import '../../css/q/q-we24bew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i4fdwq57p"/><path class="oe54axb1m"/><path class="q-we24bew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:clock-twenty-four"} {...others} />);
}

export default Component;
