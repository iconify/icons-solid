import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uch0cfbie.css';
import '../../css/z/zrajuk4aj.css';
import '../../css/p/pmpmbebsu.css';
import '../../css/z/za26ylzpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uch0cfbie"/><path class="zrajuk4aj"/><path class="pmpmbebsu"/><path class="za26ylzpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:vram"} {...others} />);
}

export default Component;
