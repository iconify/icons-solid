import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/od7x-v3cl.css';
import '../../css/q/qlswt0jgb.css';
import '../../css/r/r3ctkgbit.css';
import '../../css/g/gdo7kub5u.css';
import '../../css/y/ys9pn8ams.css';
import '../../css/f/f72hono6k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="od7x-v3cl"/><path class="qlswt0jgb"/><path class="r3ctkgbit"/><path class="gdo7kub5u"/><path class="ys9pn8ams"/><path class="f72hono6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-linear"} {...others} />);
}

export default Component;
