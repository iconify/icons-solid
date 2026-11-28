import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shpxd0meh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/o/od9kuk6ie.css';
import '../../css/n/n6i_n2h8w.css';
import '../../css/l/l5ij1khxd.css';
import '../../css/g/gl47k-but.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary shpxd0meh"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="od9kuk6ie"/><path class="n6i_n2h8w"/><path class="l5ij1khxd"/><path class="gl47k-but"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:steering-wheel-duo"} {...others} />);
}

export default Component;
