import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t4mfj4b3n.css';
import '../../css/b/bl3u4rb9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t4mfj4b3n"/><path class="bl3u4rb9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:michelin-star-green"} {...others} />);
}

export default Component;
