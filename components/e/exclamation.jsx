import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/i2xf6rbtz.css';
import '../../css/h/h-pjvxgif.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="i2xf6rbtz"/><path class="h-pjvxgif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:exclamation"} {...others} />);
}

export default Component;
