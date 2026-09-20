import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6mizdc5u.css';
import '../../css/r/r8ikbo9ae.css';
import '../../css/o/o4dmadb3b.css';
import '../../css/o/o_kit7b-o.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="v6mizdc5u"/><g class="r8ikbo9ae"><path class="o4dmadb3b"/><path class="o_kit7b-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:infinity"} {...others} />);
}

export default Component;
