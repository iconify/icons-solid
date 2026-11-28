import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exdvn478f.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h0tq4hvtq.css';
import '../../css/y/y9va7ujcs.css';
import '../../css/l/lua2tfd8g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="exdvn478f secondary"/><g class="dt0cm9dhy primary"><path class="h0tq4hvtq"/><path class="y9va7ujcs"/><path class="lua2tfd8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:door-duo"} {...others} />);
}

export default Component;
