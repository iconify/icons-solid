import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e9bpaibwn.css';
import '../../css/p/pltckst1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e9bpaibwn"/><path class="pltckst1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:table-star"} {...others} />);
}

export default Component;
