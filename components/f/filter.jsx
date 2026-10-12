import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9zav691u.css';
import '../../css/q/q3riwtcss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r9zav691u"/><path class="q3riwtcss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:filter"} {...others} />);
}

export default Component;
