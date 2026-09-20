import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nyloxrbev.css';
import '../../css/x/x9tj0nbkn.css';
import '../../css/z/zo52ynbsn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nyloxrbev"/><path class="x9tj0nbkn"/><path class="zo52ynbsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:tower-3"} {...others} />);
}

export default Component;
