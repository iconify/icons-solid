import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kukdg741y.css';
import '../../css/m/maw294_tt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kukdg741y"/><path class="maw294_tt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:tip-jar-pound"} {...others} />);
}

export default Component;
