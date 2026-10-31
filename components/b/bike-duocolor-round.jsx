import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rsirlo2lt.css';
import '../../css/e/eyyts0bbv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rsirlo2lt"/><path class="eyyts0bbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bike-duocolor-round"} {...others} />);
}

export default Component;
