import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hiyh67b3s.css';
import '../../css/p/pq9yc-7-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hiyh67b3s"/><path class="pq9yc-7-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:battery-eco"} {...others} />);
}

export default Component;
