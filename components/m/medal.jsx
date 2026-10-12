import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fx5p0hbjj.css';
import '../../css/o/on_enzb7u.css';
import '../../css/s/s2b7odbxm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fx5p0hbjj"/><path class="on_enzb7u"/><path class="s2b7odbxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:medal"} {...others} />);
}

export default Component;
