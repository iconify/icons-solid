import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f3wc8sb1h.css';
import '../../css/x/xv5gd-bdo.css';
import '../../css/y/y3cq-bcda.css';
import '../../css/j/jd-0ep1mv.css';
import '../../css/m/mit2hfbug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f3wc8sb1h"/><path class="xv5gd-bdo"/><path class="y3cq-bcda"/><path class="jd-0ep1mv"/><path class="mit2hfbug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:church"} {...others} />);
}

export default Component;
