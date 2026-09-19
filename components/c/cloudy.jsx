import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/p/po3_9rrdr.css';
import '../../css/h/hakr9xx9w.css';
import '../../css/x/xyhxy--ff.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="po3_9rrdr"/><path class="hakr9xx9w"/><path class="xyhxy--ff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cloudy"} {...others} />);
}

export default Component;
