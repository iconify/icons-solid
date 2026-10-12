import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gx2s9gbmw.css';
import '../../css/l/l675vybow.css';
import '../../css/u/u7vx7wf8m.css';
import '../../css/n/njui45b0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gx2s9gbmw"/><path class="l675vybow"/><path class="u7vx7wf8m"/><path class="njui45b0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book-open-pages"} {...others} />);
}

export default Component;
