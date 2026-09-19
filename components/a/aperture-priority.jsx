import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/g/g3shrbbbg.css';
import '../../css/s/so9--0nkn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="g3shrbbbg"/><path class="so9--0nkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:aperture-priority"} {...others} />);
}

export default Component;
