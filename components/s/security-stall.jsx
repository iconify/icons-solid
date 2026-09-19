import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/c/c5ma5eb0m.css';
import '../../css/r/rvskwxrty.css';
import '../../css/a/aleg3asja.css';
import '../../css/l/lg0-_kbbp.css';
import '../../css/p/p_7e51buh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><rect class="c5ma5eb0m"/><rect class="rvskwxrty"/><path class="aleg3asja"/><path class="lg0-_kbbp"/><path class="p_7e51buh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:security-stall"} {...others} />);
}

export default Component;
