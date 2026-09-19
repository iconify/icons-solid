import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ibdnq5fhs.css';
import '../../css/g/g41thc0as.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="ibdnq5fhs"/><path class="g41thc0as"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:xmy"} {...others} />);
}

export default Component;
