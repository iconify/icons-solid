import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nqi5dxbag.css';
import '../../css/g/gzsn_qm0g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nqi5dxbag"/><path class="gzsn_qm0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:key-cap"} {...others} />);
}

export default Component;
