import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qgvby8jhj.css';
import '../../css/f/ft2st5bdv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qgvby8jhj"/><path class="ft2st5bdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:3d-rotate"} {...others} />);
}

export default Component;
