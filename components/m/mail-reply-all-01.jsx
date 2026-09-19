import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tfewneb6d.css';
import '../../css/t/tcrnivb-g.css';
import '../../css/i/itpz-5bib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="tfewneb6d"/><path class="tcrnivb-g"/><path class="itpz-5bib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-reply-all-01"} {...others} />);
}

export default Component;
