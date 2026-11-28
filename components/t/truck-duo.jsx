import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kobh7onux.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ij3vyybgh.css';
import '../../css/c/cir9yb4sp.css';
import '../../css/b/b38cyebvi.css';
import '../../css/n/nor6gcvgk.css';
import '../../css/w/wzsfntb5d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kobh7onux secondary"/><g class="dt0cm9dhy primary"><path class="ij3vyybgh"/><path class="cir9yb4sp"/><path class="b38cyebvi"/><path class="nor6gcvgk"/><path class="wzsfntb5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:truck-duo"} {...others} />);
}

export default Component;
