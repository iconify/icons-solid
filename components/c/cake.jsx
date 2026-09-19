import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/b689fibxa.css';
import '../../css/b/byxdlpbyc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="b689fibxa"/><path class="byxdlpbyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cake"} {...others} />);
}

export default Component;
