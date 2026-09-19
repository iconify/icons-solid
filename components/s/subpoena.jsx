import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p4nocrihx.css';
import '../../css/v/v_rcp4-4p.css';
import '../../css/o/okx5q-b1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="p4nocrihx"/><path class="v_rcp4-4p"/><path class="okx5q-b1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:subpoena"} {...others} />);
}

export default Component;
