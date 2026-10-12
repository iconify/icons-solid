import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/anel9tbgf.css';
import '../../css/c/c11okoi4v.css';
import '../../css/t/tyrt-db1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="anel9tbgf"/><path class="c11okoi4v"/><path class="tyrt-db1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:clover-duotone"} {...others} />);
}

export default Component;
