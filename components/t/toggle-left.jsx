import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p6cahvb9b.css';
import '../../css/p/p0_-1ln6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p6cahvb9b"/><path class="p0_-1ln6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:toggle-left"} {...others} />);
}

export default Component;
