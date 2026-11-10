import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k21iw6bee.css';
import '../../css/j/jjlr1hpti.css';
import '../../css/d/ddcup9v4w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k21iw6bee"/><path class="jjlr1hpti"/><path class="ddcup9v4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:panel-top-open"} {...others} />);
}

export default Component;
