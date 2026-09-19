import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rfkvhqt6m.css';
import '../../css/d/dwkradbje.css';
import '../../css/q/q94wnnbrx.css';
import '../../css/c/ch3kt3fvc.css';

const viewBox = {"width":49,"height":48};
const content = `<g class="ft5dv1b6b"><path class="rfkvhqt6m"/><path class="dwkradbje"/><path class="q94wnnbrx"/><path class="ch3kt3fvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bowling"} {...others} />);
}

export default Component;
