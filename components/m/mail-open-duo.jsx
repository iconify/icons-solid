import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iban41b3x.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sz9tdkb8m.css';
import '../../css/w/wbhiowbqh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iban41b3x secondary"/><g class="dt0cm9dhy primary"><path class="sz9tdkb8m"/><path class="wbhiowbqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mail-open-duo"} {...others} />);
}

export default Component;
