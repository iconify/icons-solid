import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mbg6g-bqe.css';
import '../../css/e/enfvn1y8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mbg6g-bqe"/><path class="enfvn1y8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:basket-search"} {...others} />);
}

export default Component;
