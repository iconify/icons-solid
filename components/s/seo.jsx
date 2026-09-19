import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/swhovccgq.css';
import '../../css/v/vyiw8snfv.css';
import '../../css/w/w-54a5wuc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="swhovccgq"/><path class="vyiw8snfv"/><rect class="w-54a5wuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:seo"} {...others} />);
}

export default Component;
