import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tvdm8zb0k.css';
import '../../css/m/mdx9prbke.css';
import '../../css/o/o5_pmrv0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tvdm8zb0k"/><path class="mdx9prbke"/><path class="o5_pmrv0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:moon-01"} {...others} />);
}

export default Component;
