import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztg_-s51d.css';
import '../../css/a/aoooa44wu.css';
import '../../css/e/e5m_iacxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ztg_-s51d"/><path class="aoooa44wu"/><path class="e5m_iacxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:piggy-bank-duotone"} {...others} />);
}

export default Component;
