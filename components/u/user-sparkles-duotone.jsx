import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tohfid2mj.css';
import '../../css/o/osq6ts8yf.css';
import '../../css/n/njsvdyp0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tohfid2mj"/><path class="osq6ts8yf"/><path class="njsvdyp0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:user-sparkles-duotone"} {...others} />);
}

export default Component;
