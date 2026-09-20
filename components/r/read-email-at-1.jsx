import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9oelhb9q.css';
import '../../css/x/x19qmcbwy.css';
import '../../css/n/naxwwib6r.css';
import '../../css/n/n1e2xcfwy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s9oelhb9q"/><path class="x19qmcbwy"/><path class="naxwwib6r"/><path class="n1e2xcfwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:read-email-at-1"} {...others} />);
}

export default Component;
