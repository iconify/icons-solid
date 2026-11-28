import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a7mgnpb7z.css';
import '../../css/n/nk3w2sk1d.css';
import '../../css/g/g8hv7acos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="a7mgnpb7z"/><path class="nk3w2sk1d"/><path class="g8hv7acos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:coins"} {...others} />);
}

export default Component;
