import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjpejac3h.css';
import '../../css/f/f0knz3bso.css';
import '../../css/i/iji2xd_dv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yjpejac3h"/><path class="f0knz3bso"/><path class="iji2xd_dv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrow-down-start-circle"} {...others} />);
}

export default Component;
