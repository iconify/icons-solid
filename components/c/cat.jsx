import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bc-x7obgt.css';
import '../../css/a/adfatdb-x.css';
import '../../css/a/adrmq1-1o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bc-x7obgt"/><path class="adfatdb-x"/><path class="adrmq1-1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:cat"} {...others} />);
}

export default Component;
