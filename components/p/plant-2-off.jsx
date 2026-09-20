import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lkm9t2bni.css';
import '../../css/r/rzk0jubzq.css';
import '../../css/u/ugibliw5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lkm9t2bni"/><path class="rzk0jubzq"/><path class="ugibliw5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:plant-2-off"} {...others} />);
}

export default Component;
