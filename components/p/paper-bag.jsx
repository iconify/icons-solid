import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/odspk-bpp.css';
import '../../css/d/dj_r522sz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="odspk-bpp"/><path class="dj_r522sz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:paper-bag"} {...others} />);
}

export default Component;
