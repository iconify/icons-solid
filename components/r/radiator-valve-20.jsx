import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgepkba3y.css';
import '../../css/x/xcmsnjb3t.css';
import '../../css/y/yfrlinbim.css';
import '../../css/m/mw0z8ac3w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mgepkba3y"/><path class="xcmsnjb3t"/><path class="yfrlinbim"/><path class="mw0z8ac3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:radiator-valve-20"} {...others} />);
}

export default Component;
