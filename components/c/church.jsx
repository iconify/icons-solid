import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qxp-bdc3j.css';
import '../../css/x/xv5gd-bdo.css';
import '../../css/y/y3cq-bcda.css';
import '../../css/j/jd-0ep1mv.css';
import '../../css/i/iltzg-bxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qxp-bdc3j"/><path class="xv5gd-bdo"/><path class="y3cq-bcda"/><path class="jd-0ep1mv"/><path class="iltzg-bxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:church"} {...others} />);
}

export default Component;
