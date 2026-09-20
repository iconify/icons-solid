import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t943vbbln.css';
import '../../css/p/pib6xmr8b.css';
import '../../css/y/yfbjjtbvk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="t943vbbln"/><path class="pib6xmr8b"/><path class="yfbjjtbvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:database-subtract-2-raid-storage-code-disk-programming-database-array-hard-disc-minus"} {...others} />);
}

export default Component;
