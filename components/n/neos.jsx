import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v-4loxeou.css';
import '../../css/a/ar5a9gy3s.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="v-4loxeou"/><path class="ar5a9gy3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:neos"} {...others} />);
}

export default Component;
