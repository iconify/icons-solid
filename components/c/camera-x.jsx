import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a21rkqqeh.css';
import '../../css/v/v67rzy6br.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a21rkqqeh"/><path class="v67rzy6br"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-x"} {...others} />);
}

export default Component;
