import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/f4-hall_c.css';
import '../../css/a/a2yusv--h.css';
import '../../css/u/ud9pm5e0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="f4-hall_c"/><path class="a2yusv--h"/><path class="ud9pm5e0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:eye"} {...others} />);
}

export default Component;
