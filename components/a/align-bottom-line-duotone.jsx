import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/ck-crre5h.css';
import '../../css/o/oy1zyc70h.css';
import '../../css/s/sflfg-b2u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ck-crre5h"/><path class="oy1zyc70h"/><path class="sflfg-b2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-bottom-line-duotone"} {...others} />);
}

export default Component;
