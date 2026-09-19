import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zy9hzbckf.css';
import '../../css/q/qvp54bspk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zy9hzbckf"/><path class="qvp54bspk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:chart-line-up-solid"} {...others} />);
}

export default Component;
