import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/q/q5tvtipym.css';
import '../../css/c/cvu7sfbsh.css';
import '../../css/h/h4wkunbnb.css';
import '../../css/c/cs7ou6vcv.css';
import '../../css/e/es3ghmy2j.css';
import '../../css/q/qykokzbhg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="q5tvtipym"/><path class="cvu7sfbsh"/></g><path class="h4wkunbnb"/><path class="cs7ou6vcv"/><path class="es3ghmy2j"/><path class="qykokzbhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-rotate-orientation-bold-duotone"} {...others} />);
}

export default Component;
