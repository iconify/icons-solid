import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/o/o3qb1s8by.css';
import '../../css/n/n_jh6lbfx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="o3qb1s8by"/><path class="n_jh6lbfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rectangular-circular-connection"} {...others} />);
}

export default Component;
