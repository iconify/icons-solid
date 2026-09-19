import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/d/da1dlqbrp.css';
import '../../css/g/g247_u5kv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="da1dlqbrp"/><path class="g247_u5kv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:volume-down"} {...others} />);
}

export default Component;
