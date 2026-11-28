import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7i1nsg6u.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hdhvzybvr.css';
import '../../css/i/i-ynbibxz.css';
import '../../css/u/ukw3gwlbs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary w7i1nsg6u"/><g class="dt0cm9dhy primary"><path class="hdhvzybvr"/><path class="i-ynbibxz"/><path class="ukw3gwlbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:street-lamp-duo"} {...others} />);
}

export default Component;
