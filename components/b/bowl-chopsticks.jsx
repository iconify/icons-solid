import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wb7hhtb9x.css';
import '../../css/r/reazo4b-i.css';
import '../../css/y/yhe-7eb-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wb7hhtb9x"/><path class="reazo4b-i"/><path class="yhe-7eb-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bowl-chopsticks"} {...others} />);
}

export default Component;
