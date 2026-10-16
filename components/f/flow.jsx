import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kae0pfb-s.css';
import '../../css/l/luw-cyu8c.css';
import '../../css/g/gtrbizr6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kae0pfb-s"/><path class="luw-cyu8c"/><circle class="gtrbizr6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:flow"} {...others} />);
}

export default Component;
