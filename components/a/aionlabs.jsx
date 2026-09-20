import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u8auz9i1r.css';
import '../../css/r/r7imq1lay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="u8auz9i1r"/><path class="r7imq1lay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:aionlabs"} {...others} />);
}

export default Component;
