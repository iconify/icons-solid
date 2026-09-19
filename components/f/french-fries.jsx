import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/amzbzxb8s.css';
import '../../css/g/gr93ygbgb.css';
import '../../css/b/bi3icjb1j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="amzbzxb8s"/><path class="gr93ygbgb"/><ellipse class="bi3icjb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:french-fries"} {...others} />);
}

export default Component;
