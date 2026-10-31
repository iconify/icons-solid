import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rwazahv6a.css';
import '../../css/b/bi7ozyb6i.css';
import '../../css/n/n2jpe04_t.css';
import '../../css/k/kb-riodzn.css';
import '../../css/c/cd823acyk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="rwazahv6a wm-shadow"/><path class="bi7ozyb6i wm-shadow"/><path class="n2jpe04_t"/><path class="kb-riodzn"/><path class="cd823acyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:crayon"} {...others} />);
}

export default Component;
