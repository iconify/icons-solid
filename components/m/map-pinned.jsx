import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d67-bubxz.css';
import '../../css/e/etdj58bqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d67-bubxz"/><path class="etdj58bqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:map-pinned"} {...others} />);
}

export default Component;
