import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/v/v9t05k81a.css';
import '../../css/h/h39g81kyw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="v9t05k81a"/><path class="h39g81kyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:lock"} {...others} />);
}

export default Component;
