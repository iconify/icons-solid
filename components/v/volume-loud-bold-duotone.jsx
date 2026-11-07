import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-vla9b5h.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/kzd57cc0u.css';
import '../../css/h/h3g8i1brp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d-vla9b5h"/><g class="xtpeb-edw"><path class="kzd57cc0u"/><path class="h3g8i1brp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volume-loud-bold-duotone"} {...others} />);
}

export default Component;
