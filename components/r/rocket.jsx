import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/l/l8ixyebia.css';
import '../../css/f/fsqn6obci.css';
import '../../css/d/dak5wlciw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="l8ixyebia"/><path clip-rule="evenodd" class="fsqn6obci"/><path class="dak5wlciw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:rocket"} {...others} />);
}

export default Component;
