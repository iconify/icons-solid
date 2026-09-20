import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lf3qp_-on.css';
import '../../css/z/zr7z1ql5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lf3qp_-on"/><path class="zr7z1ql5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cube-unfolded"} {...others} />);
}

export default Component;
