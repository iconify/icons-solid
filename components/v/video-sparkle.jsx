import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wo9n5kb_f.css';
import '../../css/e/e9dwx7bxt.css';
import '../../css/s/s1kqxibiq.css';
import '../../css/n/ny1tw4bjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wo9n5kb_f"/><path class="e9dwx7bxt"/><path class="s1kqxibiq"/><path class="ny1tw4bjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:video-sparkle"} {...others} />);
}

export default Component;
