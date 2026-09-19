import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mgz8e2h5p.css';
import '../../css/c/carupk4nw.css';
import '../../css/v/vsu4ddclq.css';
import '../../css/y/y_9a-gb3s.css';
import '../../css/v/v4e6rhbkp.css';
import '../../css/a/anjo4ybes.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGUJpLP0FC)" class="mgz8e2h5p"/><path fill="url(#SVGUJpLP0FC)" class="carupk4nw"/><path fill="url(#SVGUJpLP0FC)" class="vsu4ddclq"/><path fill="url(#SVGUJpLP0FC)" class="y_9a-gb3s"/><defs><radialGradient id="SVGUJpLP0FC" cx="0" cy="0" r="1" gradientTransform="matrix(0 -11 15.3509 0 10 15)" gradientUnits="userSpaceOnUse"><stop offset=".114" class="v4e6rhbkp"/><stop offset="1" class="anjo4ybes"/></radialGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:wifi-20"} {...others} />);
}

export default Component;
