import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y2djqjb8l.css';
import '../../css/g/gbe2j6boe.css';
import '../../css/x/x8niydb0w.css';
import '../../css/d/d9cjeocjq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="y2djqjb8l"/><path class="gbe2j6boe"/><path class="x8niydb0w"/><path class="d9cjeocjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:car-02"} {...others} />);
}

export default Component;
