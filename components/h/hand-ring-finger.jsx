import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/adi0c0k1r.css';
import '../../css/g/gvi6q-b4n.css';
import '../../css/a/aaly64bvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="adi0c0k1r"/><path class="gvi6q-b4n"/><path class="aaly64bvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hand-ring-finger"} {...others} />);
}

export default Component;
