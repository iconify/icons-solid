import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kfitnrb4y.css';
import '../../css/c/ckm9abbmf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kfitnrb4y"/><path class="ckm9abbmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrows-split-2"} {...others} />);
}

export default Component;
