import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nrjdb5xtb.css';
import '../../css/f/fvfk__iji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nrjdb5xtb"/><path class="fvfk__iji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:receipt-euro"} {...others} />);
}

export default Component;
