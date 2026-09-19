import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5f5msbrf.css';
import '../../css/d/dx3032ngj.css';
import '../../css/i/ibbuc4bji.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d5f5msbrf"/><path class="dx3032ngj"/><path class="ibbuc4bji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:performingarts"} {...others} />);
}

export default Component;
