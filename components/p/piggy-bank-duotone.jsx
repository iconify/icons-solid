import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g5hzoibvf.css';
import '../../css/y/ycbr2ubsi.css';
import '../../css/n/n958a9tgh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g5hzoibvf"/><path class="ycbr2ubsi"/><path class="n958a9tgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:piggy-bank-duotone"} {...others} />);
}

export default Component;
