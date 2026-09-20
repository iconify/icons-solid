import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/v/vrdtgthjw.css';
import '../../css/t/tno6_nwxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="h_tsn8bxt"/><path class="vrdtgthjw"/><path class="tno6_nwxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:ferris-wheel"} {...others} />);
}

export default Component;
