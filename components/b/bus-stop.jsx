import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nmlhygb4s.css';
import '../../css/g/gxnnybbyt.css';
import '../../css/s/sduaog7rg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nmlhygb4s"/><path class="gxnnybbyt"/><path class="sduaog7rg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bus-stop"} {...others} />);
}

export default Component;
