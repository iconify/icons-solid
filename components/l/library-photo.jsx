import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ya2sk7ccw.css';
import '../../css/e/ea1hc3bgb.css';
import '../../css/v/va2daxbvw.css';
import '../../css/f/f-734achj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ya2sk7ccw"/><path class="ea1hc3bgb"/><path class="va2daxbvw"/><path class="f-734achj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:library-photo"} {...others} />);
}

export default Component;
