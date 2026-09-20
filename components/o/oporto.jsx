import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm9yzobix.css';
import '../../css/n/n8hq-bb-h.css';
import '../../css/m/mdoa6mb-r.css';
import '../../css/a/atc9tum9k.css';
import '../../css/q/q5-mclb4w.css';

const viewBox = {"width":35.402,"height":11.519};
const content = `<g class="wm9yzobix"><path class="n8hq-bb-h"/><path class="mdoa6mb-r"/><path class="atc9tum9k"/><path class="q5-mclb4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:oporto"} {...others} />);
}

export default Component;
