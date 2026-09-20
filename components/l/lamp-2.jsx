import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q6e3cs9co.css';
import '../../css/g/gwal899za.css';
import '../../css/s/si9kwcchz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q6e3cs9co"/><path class="gwal899za"/><path class="si9kwcchz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lamp-2"} {...others} />);
}

export default Component;
