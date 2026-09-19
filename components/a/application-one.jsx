import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/z/za-9kdbrg.css';
import '../../css/m/m6257tb5b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="za-9kdbrg"/><path class="m6257tb5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:application-one"} {...others} />);
}

export default Component;
