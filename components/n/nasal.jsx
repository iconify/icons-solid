import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/l/lnaiokb6e.css';
import '../../css/p/pyj6a0gqj.css';
import '../../css/s/sok8u5bad.css';
import '../../css/q/qbgl5sb_b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="lnaiokb6e"/><path class="pyj6a0gqj"/><path class="sok8u5bad"/><path class="qbgl5sb_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:nasal"} {...others} />);
}

export default Component;
