import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bsrv_kbua.css';
import '../../css/t/twty1ix1d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bsrv_kbua"/><path class="twty1ix1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:siren"} {...others} />);
}

export default Component;
