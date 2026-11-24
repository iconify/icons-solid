import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/utz_ww1eq.css';
import '../../css/v/v99dws5gv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="utz_ww1eq"/><circle class="v99dws5gv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:circle-speed-lines"} {...others} />);
}

export default Component;
