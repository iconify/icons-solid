import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1lif4b0z.css';
import '../../css/t/tq3i0n2qm.css';
import '../../css/e/ehuvywcsw.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><path id="SVGfDRX2dml" class="t1lif4b0z"/></defs><use href="#SVGfDRX2dml"/><use href="#SVGfDRX2dml"/><path class="tq3i0n2qm"/><rect class="ehuvywcsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:trash-bin-sharp"} {...others} />);
}

export default Component;
