import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u2d0iyzci.css';
import '../../css/u/usz06lu6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u2d0iyzci"/><path class="usz06lu6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:pepper-off"} {...others} />);
}

export default Component;
