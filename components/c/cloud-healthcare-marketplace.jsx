import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tcvz_bb_s.css';
import '../../css/c/cfc7gmban.css';
import '../../css/x/x2j6x9bwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="bi12bsetm"><path class="tcvz_bb_s"/><path class="cfc7gmban"/><path class="x2j6x9bwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-healthcare-marketplace"} {...others} />);
}

export default Component;
