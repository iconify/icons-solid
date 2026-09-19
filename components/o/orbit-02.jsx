import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/drnrbe-2t.css';
import '../../css/t/t7cr3_k7i.css';
import '../../css/c/c_zsa6bia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="drnrbe-2t"/><path class="t7cr3_k7i"/><path class="c_zsa6bia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:orbit-02"} {...others} />);
}

export default Component;
