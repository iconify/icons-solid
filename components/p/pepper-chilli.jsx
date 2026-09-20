import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fwwtz_beh.css';
import '../../css/a/azi7k547z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fwwtz_beh"/><path class="azi7k547z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:pepper-chilli"} {...others} />);
}

export default Component;
