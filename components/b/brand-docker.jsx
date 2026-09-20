import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uq76zgbfo.css';
import '../../css/q/ql2enlb9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uq76zgbfo"/><path class="ql2enlb9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-docker"} {...others} />);
}

export default Component;
