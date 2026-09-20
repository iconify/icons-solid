import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/d/db3s0pkqj.css';
import '../../css/y/y5n3hob1b.css';
import '../../css/h/hy2zznx0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="db3s0pkqj"/><path class="y5n3hob1b"/><path class="hy2zznx0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:bag-dollar"} {...others} />);
}

export default Component;
