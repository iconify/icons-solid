import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/umch1hbbu.css';
import '../../css/m/mpr2uyb7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="umch1hbbu"/><path class="mpr2uyb7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:trending-down"} {...others} />);
}

export default Component;
