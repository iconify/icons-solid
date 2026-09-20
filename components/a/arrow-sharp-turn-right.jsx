import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ybwi6ab1b.css';
import '../../css/i/iu_0ubb-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ybwi6ab1b"/><path class="iu_0ubb-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-sharp-turn-right"} {...others} />);
}

export default Component;
