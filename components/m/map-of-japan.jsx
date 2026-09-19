import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wldyddchs.css';
import '../../css/d/d1ny50d5n.css';
import '../../css/e/ediclqbms.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="wldyddchs"><path class="d1ny50d5n"/><path class="ediclqbms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:map-of-japan"} {...others} />);
}

export default Component;
