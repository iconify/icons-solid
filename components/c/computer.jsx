import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvu1pxbbe.css';
import '../../css/e/eg88gnbzy.css';
import '../../css/g/g0bsq3byr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pvu1pxbbe"/><path class="eg88gnbzy"/><path class="g0bsq3byr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:computer"} {...others} />);
}

export default Component;
