import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sloxky3hq.css';
import '../../css/t/ty3wfdbwh.css';
import '../../css/e/ecqyph_wl.css';
import '../../css/w/w7gct3bsf.css';

const viewBox = {"width":365.56,"height":245.56,"left":-2.78,"top":54.22};
const content = `<g class="sloxky3hq"><path class="ty3wfdbwh"/><path class="ecqyph_wl"/><path class="w7gct3bsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cloudevents-light"} {...others} />);
}

export default Component;
