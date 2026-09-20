import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ampt1vbjb.css';
import '../../css/j/j9x2719of.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ampt1vbjb"/><path class="j9x2719of"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:lipstick-solid"} {...others} />);
}

export default Component;
