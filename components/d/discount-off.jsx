import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a3g0lob5j.css';
import '../../css/p/p672usoul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a3g0lob5j"/><path class="p672usoul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:discount-off"} {...others} />);
}

export default Component;
