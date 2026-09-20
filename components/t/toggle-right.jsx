import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h0im107ld.css';
import '../../css/p/p0_-1ln6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h0im107ld"/><path class="p0_-1ln6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:toggle-right"} {...others} />);
}

export default Component;
