import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i3hr2bc9y.css';
import '../../css/c/c3td-abmx.css';
import '../../css/s/svfwpgbum.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i3hr2bc9y"/><path class="c3td-abmx"/><path class="svfwpgbum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:experiment-sparkle"} {...others} />);
}

export default Component;
