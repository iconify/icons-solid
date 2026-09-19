import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/g/glcjunb5u.css';
import '../../css/d/de8dzpspb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="glcjunb5u"/><path class="de8dzpspb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:mall-bag"} {...others} />);
}

export default Component;
