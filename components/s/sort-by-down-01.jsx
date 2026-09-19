import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b2sa5eobi.css';
import '../../css/t/tic72tbly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="b2sa5eobi"/><path class="tic72tbly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sort-by-down-01"} {...others} />);
}

export default Component;
