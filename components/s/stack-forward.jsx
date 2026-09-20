import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ej0e7sner.css';
import '../../css/r/rph45lb6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ej0e7sner"/><path class="rph45lb6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:stack-forward"} {...others} />);
}

export default Component;
