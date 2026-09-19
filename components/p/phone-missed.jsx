import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/a/apv_ygbqp.css';
import '../../css/w/w9s7wq5uk.css';
import '../../css/w/wnhgvjbbd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="apv_ygbqp"/><path class="w9s7wq5uk"/><path class="wnhgvjbbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:phone-missed"} {...others} />);
}

export default Component;
