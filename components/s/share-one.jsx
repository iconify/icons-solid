import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rwtewhbdy.css';
import '../../css/a/ayj3gb6gy.css';
import '../../css/v/v_ynbeuec.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="rwtewhbdy"/><path class="ayj3gb6gy"/><path class="v_ynbeuec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:share-one"} {...others} />);
}

export default Component;
