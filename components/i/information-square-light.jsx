import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/p/pgoy4ib5g.css';
import '../../css/p/pftnf9bpg.css';
import '../../css/p/p196trped.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="pgoy4ib5g"/><path class="pftnf9bpg"/><path class="p196trped"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:information-square-light"} {...others} />);
}

export default Component;
