import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/utda-fnho.css';
import '../../css/d/dvucy2b6c.css';
import '../../css/e/e4g6mlfws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="utda-fnho"/><path class="dvucy2b6c"/><path class="e4g6mlfws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:soundcloud-logo"} {...others} />);
}

export default Component;
