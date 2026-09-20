import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ld24yvbps.css';
import '../../css/w/wy-6to7yi.css';
import '../../css/p/p2i89_23r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ld24yvbps"/><path class="wy-6to7yi"/><path class="p2i89_23r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:radar-2"} {...others} />);
}

export default Component;
