import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v1xlurbdb.css';
import '../../css/n/niv8i0kwk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v1xlurbdb"/><path class="niv8i0kwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-nexo"} {...others} />);
}

export default Component;
