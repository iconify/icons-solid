import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/urbqk-bvz.css';
import '../../css/t/t8fxfib1g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="urbqk-bvz"/><path class="t8fxfib1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-x"} {...others} />);
}

export default Component;
