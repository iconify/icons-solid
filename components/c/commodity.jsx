import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/s/sqougybbp.css';
import '../../css/b/by6efw6xw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="sqougybbp"/><path class="by6efw6xw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:commodity"} {...others} />);
}

export default Component;
