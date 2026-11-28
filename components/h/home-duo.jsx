import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4w1opbcu.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dca2urprn.css';
import '../../css/c/c6-ujx0zl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h4w1opbcu secondary"/><g class="dt0cm9dhy primary"><path class="dca2urprn"/><path class="c6-ujx0zl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:home-duo"} {...others} />);
}

export default Component;
