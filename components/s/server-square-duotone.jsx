import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m2olt1beo.css';
import '../../css/d/dab4yko7u.css';
import '../../css/f/fkqe7rzrq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="m2olt1beo"/><path clip-rule="evenodd" class="dab4yko7u"/><path class="fkqe7rzrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:server-square-duotone"} {...others} />);
}

export default Component;
