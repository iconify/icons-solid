import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tadzi8bpr.css';
import '../../css/x/x7p08_bag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tadzi8bpr"/><path class="x7p08_bag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:thinking-medium"} {...others} />);
}

export default Component;
