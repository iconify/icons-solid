import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fo7dwf4dh.css';
import '../../css/e/ei1y8fbbq.css';
import '../../css/u/uy1c0w2vt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fo7dwf4dh"/><path class="ei1y8fbbq"/><path class="uy1c0w2vt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cherry"} {...others} />);
}

export default Component;
