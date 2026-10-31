import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ec7g9wu4f.css';
import '../../css/p/pq61nfb5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ec7g9wu4f"/><path class="pq61nfb5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:recycle-duocolor-round"} {...others} />);
}

export default Component;
