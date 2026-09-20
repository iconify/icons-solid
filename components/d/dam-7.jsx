import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qf5klnkgl.css';
import '../../css/o/oqrcwk50g.css';
import '../../css/q/qwclmq-hc.css';
import '../../css/u/ua54wjybd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qf5klnkgl"/><path class="oqrcwk50g"/><path class="qwclmq-hc"/><path class="ua54wjybd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:dam-7"} {...others} />);
}

export default Component;
