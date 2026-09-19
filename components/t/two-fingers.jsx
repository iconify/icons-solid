import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/j/jddr444ma.css';
import '../../css/e/eivoixbxz.css';
import '../../css/w/wp5pbcw0d.css';
import '../../css/q/qyotc1bwx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="jddr444ma"/><path class="eivoixbxz"/><path class="wp5pbcw0d"/><path class="qyotc1bwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:two-fingers"} {...others} />);
}

export default Component;
