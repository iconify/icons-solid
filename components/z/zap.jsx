import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uwv-dub0t.css';
import '../../css/v/v1umkypug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uwv-dub0t"/><path class="v1umkypug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:zap"} {...others} />);
}

export default Component;
