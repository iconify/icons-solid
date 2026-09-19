import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/a/arzy41byy.css';
import '../../css/y/yd5ssobgf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="arzy41byy"/><path clip-rule="evenodd" class="yd5ssobgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hand-left"} {...others} />);
}

export default Component;
