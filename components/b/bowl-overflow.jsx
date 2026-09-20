import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fcsg64zqt.css';
import '../../css/q/qv2bjpnfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fcsg64zqt"/><path class="qv2bjpnfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:bowl-overflow"} {...others} />);
}

export default Component;
