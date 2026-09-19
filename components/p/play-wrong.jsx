import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/a/afw5bxb9f.css';
import '../../css/y/y0ff67jel.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="afw5bxb9f"/><path class="y0ff67jel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:play-wrong"} {...others} />);
}

export default Component;
