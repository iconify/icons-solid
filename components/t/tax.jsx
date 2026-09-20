import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hm3biobak.css';
import '../../css/c/c8kzupr1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hm3biobak"/><path class="c8kzupr1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:tax"} {...others} />);
}

export default Component;
