import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iyyd_zb3g.css';
import '../../css/k/kpl91mcbk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="iyyd_zb3g"/><path class="kpl91mcbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:battery"} {...others} />);
}

export default Component;
