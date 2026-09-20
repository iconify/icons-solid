import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k-zplccpq.css';
import '../../css/v/vn8jdeb6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k-zplccpq"/><path class="vn8jdeb6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:network-off"} {...others} />);
}

export default Component;
