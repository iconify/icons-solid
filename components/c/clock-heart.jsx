import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mrx722b5b.css';
import '../../css/m/m8-teskio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mrx722b5b"/><path class="m8-teskio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-heart"} {...others} />);
}

export default Component;
