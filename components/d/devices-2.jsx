import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u21hjpu4r.css';
import '../../css/h/hhb7ivskn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u21hjpu4r"/><path class="hhb7ivskn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:devices-2"} {...others} />);
}

export default Component;
