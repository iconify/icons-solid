import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y84mz1woh.css';
import '../../css/t/tyy440mmu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y84mz1woh"/><path class="tyy440mmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-case-sensitive"} {...others} />);
}

export default Component;
