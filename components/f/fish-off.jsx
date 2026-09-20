import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wewio4b2f.css';
import '../../css/c/c8tqhzbrd.css';
import '../../css/t/ttdmdibgv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wewio4b2f"/><path class="c8tqhzbrd"/><path class="ttdmdibgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:fish-off"} {...others} />);
}

export default Component;
