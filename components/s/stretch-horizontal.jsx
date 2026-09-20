import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iu6-babcr.css';
import '../../css/k/k766skkve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="iu6-babcr"/><rect class="k766skkve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:stretch-horizontal"} {...others} />);
}

export default Component;
