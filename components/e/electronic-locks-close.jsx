import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/g/gkr7b7b8o.css';
import '../../css/e/e7dr5zbeu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="gkr7b7b8o"/><path class="e7dr5zbeu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:electronic-locks-close"} {...others} />);
}

export default Component;
