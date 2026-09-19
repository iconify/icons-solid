import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/p/pbcpcobla.css';
import '../../css/m/mug27bbbv.css';
import '../../css/w/wv-togb4q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="pbcpcobla"/><path class="mug27bbbv"/><path class="wv-togb4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:performance"} {...others} />);
}

export default Component;
