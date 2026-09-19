import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aegx9-bwe.css';
import '../../css/k/ky-mbfiae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="aegx9-bwe"/><path class="ky-mbfiae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:cloudy-partly-night"} {...others} />);
}

export default Component;
