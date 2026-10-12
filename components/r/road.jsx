import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7xwfcc1b.css';
import '../../css/b/bq1h8fbwz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w7xwfcc1b"/><path class="bq1h8fbwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:road"} {...others} />);
}

export default Component;
