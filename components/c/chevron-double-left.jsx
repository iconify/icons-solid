import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h7wpl6byg.css';
import '../../css/r/rxejns39i.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="h7wpl6byg"/><path class="rxejns39i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:chevron-double-left"} {...others} />);
}

export default Component;
