import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d89ad6eqx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a2hzo5b3k.css';
import '../../css/a/a4ypgybdv.css';
import '../../css/h/hfdwwi98u.css';
import '../../css/l/ly44mob4g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d89ad6eqx secondary"/><g class="dt0cm9dhy primary"><path class="a2hzo5b3k"/><path class="a4ypgybdv"/><path class="hfdwwi98u"/><path class="ly44mob4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:frog-duo"} {...others} />);
}

export default Component;
