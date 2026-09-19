import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/swvhcgbhv.css';
import '../../css/o/odjtimb2n.css';
import '../../css/l/lfej7qb0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="swvhcgbhv"/><path class="odjtimb2n"/><path class="lfej7qb0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:table-lamp-02"} {...others} />);
}

export default Component;
