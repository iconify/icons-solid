import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nmmdaumzv.css';
import '../../css/q/qgc8am0ho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nmmdaumzv"/><path class="qgc8am0ho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:rocket-off"} {...others} />);
}

export default Component;
