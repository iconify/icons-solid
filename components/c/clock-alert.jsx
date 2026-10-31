import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xa294slun.css';
import '../../css/s/s0wqvob8p.css';
import '../../css/g/gldsjc2aa.css';
import '../../css/c/crymzbptu.css';
import '../../css/g/gsnhresfz.css';
import '../../css/c/co_pyj9ey.css';
import '../../css/u/ukoz8qgjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow xa294slun"/><path class="s0wqvob8p"/><path class="gldsjc2aa"/><path class="crymzbptu"/><path class="gsnhresfz"/><path class="co_pyj9ey"/><path class="ukoz8qgjl wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:clock-alert"} {...others} />);
}

export default Component;
