import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/llj46q5hf.css';
import '../../css/g/gvi6q-b4n.css';
import '../../css/l/lg_epd7vn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="llj46q5hf"/><path class="gvi6q-b4n"/><path class="lg_epd7vn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hand-middle-finger"} {...others} />);
}

export default Component;
