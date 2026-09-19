import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/f/fsgtypbca.css';
import '../../css/w/wx1nv1b4t.css';
import '../../css/b/ba9iqk-jv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="fsgtypbca"/><path class="wx1nv1b4t"/><path class="ba9iqk-jv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bank-card-two"} {...others} />);
}

export default Component;
