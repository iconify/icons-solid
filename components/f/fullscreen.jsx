import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p_qogjuvx.css';
import '../../css/s/sugtx2bid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p_qogjuvx"/><rect class="sugtx2bid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:fullscreen"} {...others} />);
}

export default Component;
