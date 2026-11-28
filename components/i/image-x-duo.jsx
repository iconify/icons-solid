import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mw9-9do_v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jo_ql869u.css';
import '../../css/n/n1-nh8qnp.css';
import '../../css/x/xngwvqbsq.css';
import '../../css/p/p6hjs_b5l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mw9-9do_v secondary"/><g class="dt0cm9dhy primary"><path class="jo_ql869u"/><path class="n1-nh8qnp"/><path class="xngwvqbsq"/><path class="p6hjs_b5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:image-x-duo"} {...others} />);
}

export default Component;
