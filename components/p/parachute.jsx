import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/d/dn-moybpl.css';
import '../../css/j/jmvvdibbo.css';
import '../../css/m/mpnkaz1im.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="dn-moybpl"/><path class="jmvvdibbo"/><path class="mpnkaz1im"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:parachute"} {...others} />);
}

export default Component;
