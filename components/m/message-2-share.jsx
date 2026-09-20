import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vzeb3bblp.css';
import '../../css/r/rita3gbmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vzeb3bblp"/><path class="rita3gbmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:message-2-share"} {...others} />);
}

export default Component;
