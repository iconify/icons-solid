import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eoh47sb2n.css';
import '../../css/u/ue3e5g9-c.css';
import '../../css/d/d2r59cciv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="eoh47sb2n"/><path class="ue3e5g9-c"/><path class="d2r59cciv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:circle-lock-remove-02"} {...others} />);
}

export default Component;
