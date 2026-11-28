import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qmicmbcyc.css';
import '../../css/c/cn99xcc2h.css';
import '../../css/p/p--ya6vnf.css';
import '../../css/x/xd9fo3moo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qmicmbcyc"/><path class="cn99xcc2h"/><path class="p--ya6vnf"/><path class="xd9fo3moo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:zodiac-virgo"} {...others} />);
}

export default Component;
