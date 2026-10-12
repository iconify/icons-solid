import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dcy77s23i.css';
import '../../css/j/jecgoz4ei.css';
import '../../css/t/tx4-hdqju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="dcy77s23i"/><rect class="jecgoz4ei"/><path class="tx4-hdqju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-firstline-start"} {...others} />);
}

export default Component;
