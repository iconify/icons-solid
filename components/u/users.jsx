import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i3nt_5b5j.css';
import '../../css/c/c5gfowu_b.css';
import '../../css/m/mgsxq4bxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="i3nt_5b5j"/><path class="c5gfowu_b"/><path class="mgsxq4bxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:users"} {...others} />);
}

export default Component;
