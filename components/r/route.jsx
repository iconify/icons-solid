import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tke4h5b0x.css';
import '../../css/c/c5kr73bow.css';
import '../../css/u/ugw1omula.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="tke4h5b0x"/><path class="c5kr73bow"/><circle class="ugw1omula"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:route"} {...others} />);
}

export default Component;
