import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/czeiw6b4w.css';
import '../../css/p/p_64ncbxo.css';
import '../../css/s/sfrj7abtj.css';
import '../../css/j/jpb-3cbbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="czeiw6b4w"/><path class="p_64ncbxo"/><path class="sfrj7abtj"/><path class="jpb-3cbbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chart-line-duotone"} {...others} />);
}

export default Component;
