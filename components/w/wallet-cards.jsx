import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/npdjkvbfv.css';
import '../../css/p/pq80gbbxe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="npdjkvbfv"/><path class="pq80gbbxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:wallet-cards"} {...others} />);
}

export default Component;
